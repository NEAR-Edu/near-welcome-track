interface StorageSchema {
  content: {
    saved: 'true';
    completed: 'true';
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
