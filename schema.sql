create type content_experience as enum (
  0, -- zero
  1, -- basic
  2, -- intermediate
  3  -- expert
);

create type content_type as enum (
  'text',
  'audio',
  'video',
  -- 'image',
  'code'
);

create table if not exists persona (
  id int generated always as identity,
  name text not null unique,
  -- description text not null,
  primary key (id)
);

create table if not exists content (
  id int generated always as identity,
  title text not null unique,
  description text not null,
  link text not null,
  author text,
  source text not null,
  type content_type not null,
  language text not null default 'en',
  duration int,
  experience content_experience not null,
  primary key (id)
);

create table if not exists tag (
  id int generated always as identity,
  name text not null unique,
  primary key (id)
);

create table if not exists content_tag (
  id int generated always as identity,
  content_id int not null,
  tag_id int not null,
  foreign key (content_id)
    references content(id)
      on update cascade
      on delete cascade,
  foreign key (tag_id)
    references tag(id)
      on update cascade
      on delete cascade
);
