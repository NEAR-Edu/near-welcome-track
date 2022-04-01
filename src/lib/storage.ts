interface StorageSchema {
  content: {
    saved: 'true';
    completed: 'true';
    hidden: 'true';
  };
}

export function remove<N extends keyof StorageSchema, P extends keyof StorageSchema[N]>(namespace: N, id: string, property: P) {
  const storageId = `${namespace}:${id}:${property}`;
  localStorage.removeItem(storageId);
}

export function store<N extends keyof StorageSchema, P extends keyof StorageSchema[N], V extends StorageSchema[N][P] & string>(namespace: N, id: string, property: P, value: V) {
  const storageId = `${namespace}:${id}:${property}`;
  localStorage.setItem(storageId, value);
}

export function read<N extends keyof StorageSchema, P extends keyof StorageSchema[N], V extends StorageSchema[N][P] & string>(namespace: N, id: string, property: P): V | null {
  const storageId = `${namespace}:${id}:${property}`;
  return localStorage.getItem(storageId) as V | null;
}

export function toggle<N extends keyof StorageSchema, P extends keyof StorageSchema[N], V extends StorageSchema[N][P] & string>(
  namespace: N,
  id: string,
  property: V extends 'true' ? P : never,
  force?: boolean,
): boolean {
  const toggled = force ?? !read(namespace, id, property);
  if (toggled) {
    store<N, P, V>(namespace, id, property, 'true' as V);
  } else {
    remove(namespace, id, property);
  }
  return toggled;
}
