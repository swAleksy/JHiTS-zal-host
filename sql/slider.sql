CREATE TABLE `images` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`descrip` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
	`file_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
	`name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
	PRIMARY KEY (`id`)
) 	ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `images`
    ADD PRIMARY KEY (`id`);