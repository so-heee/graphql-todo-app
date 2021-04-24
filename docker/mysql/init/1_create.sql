USE sample;

create table users (
  id         int auto_increment,
  name       varchar(64),
  email      varchar(64),
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp on update current_timestamp,
  primary key(id)
);

insert into `users`(
    `id`,
    `name`,
    `email`,
    `created_at`,
    `updated_at`
)
values(
    1,
    'aaa',
    'aaa@gmail.com',
    '2020-01-01 00:00:00',
    '2020-01-02 00:00:00'
),
(
    2,
    'bbb',
    'bbb@gmail.com',
    '2020-02-01 00:00:00',
    '2020-02-02 00:00:00'
),
(
    3,
    'ccc',
    'ccc@gmail.com',
    '2020-03-01 00:00:00',
    '2020-03-02 00:00:00'
),
(
    4,
    'ddd',
    'ddd@gmail.com',
    '2020-04-01 00:00:00',
    '2020-04-02 00:00:00'
),
(
    5,
    'eee',
    'eee@gmail.com',
    '2020-05-01 00:00:00',
    '2020-05-02 00:00:00'
),
(
    6,
    'fff',
    'fff@gmail.com',
    '2020-06-01 00:00:00',
    '2020-06-02 00:00:00'
),
(
    7,
    'ggg',
    'ggg@gmail.com',
    '2020-07-01 00:00:00',
    '2020-07-02 00:00:00'
)
;