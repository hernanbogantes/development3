CREATE TABLE IF NOT EXISTS Product(
    id int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    image_url varchar(255) NULL,
    "name" varchar(255) NULL,
    CONSTRAINT product_pkey PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS courses (
	id serial4 NOT NULL,
	coursename varchar(50) NOT NULL,
	CONSTRAINT course_pkey PRIMARY KEY (id),
	CONSTRAINT courses_coursename_key UNIQUE (coursename)
);
CREATE TABLE IF NOT EXISTS students (
	id serial4 NOT NULL,
	courseid int4 NOT NULL,
	studentname varchar(50) NOT NULL,
	CONSTRAINT students_pkey PRIMARY KEY (id),
	CONSTRAINT students_studentname_key UNIQUE (courseid, studentname)
);

INSERT INTO public.courses (coursename) VALUES('course1');
INSERT INTO public.courses (coursename) VALUES('course2');
INSERT INTO public.courses (coursename) VALUES('course3');
INSERT INTO public.courses (coursename) VALUES('course4');
INSERT INTO public.courses (coursename) VALUES('course5');

INSERT INTO public.students (courseid, studentname) VALUES(1, 'student1');
INSERT INTO public.students (courseid, studentname) VALUES(2, 'student1');
INSERT INTO public.students (courseid, studentname) VALUES(3, 'student1');
INSERT INTO public.students (courseid, studentname) VALUES(1, 'student2');
INSERT INTO public.students (courseid, studentname) VALUES(2, 'student2');
INSERT INTO public.students (courseid, studentname) VALUES(3, 'student');
INSERT INTO public.students (courseid, studentname) VALUES(1, 'student3');
INSERT INTO public.students (courseid, studentname) VALUES(2, 'student3');
INSERT INTO public.students (courseid, studentname) VALUES(3, 'student3');




DELETE FROM Product;
INSERT INTO Product(image_url, name) VALUES ('https://cphapp.rema1000.dk/api/v1/catalog/store/1/item/23420/image/1462221519/600.jpg', 'CREMEFRAICHE');
INSERT INTO Product(image_url, name) VALUES ('https://cphapp.rema1000.dk/api/v1/catalog/store/1/item/213942/image/1560262700/600.jpg', 'PEPSI MAX');
INSERT INTO Product(image_url, name) VALUES ('https://cphapp.rema1000.dk/api/v1/catalog/store/1/item/201003/image/1553075410/600.jpg', 'CARLSBERG');
INSERT INTO Product(image_url, name) VALUES ('https://cphapp.rema1000.dk/api/v1/catalog/store/1/item/400176/image/1569941273/600.jpg', 'HK. OKSEKØD 15-18');
INSERT INTO Product(image_url, name) VALUES ('https://cphapp.rema1000.dk/api/v1/catalog/store/1/item/212652/image/1549284118/600.jpg', 'COCA COLA');
INSERT INTO Product(image_url, name) VALUES ('https://cphapp.rema1000.dk/api/v1/catalog/store/1/item/61250/image/1534406146/600.jpg', 'BURGERBOLLER');