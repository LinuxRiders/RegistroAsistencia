USE railway;

-- /////////////// LOGIN ////////////////////////

CREATE TABLE tokens(
	id INT AUTO_INCREMENT PRIMARY KEY,
    token TEXT NOT NULL
);

CREATE TABLE users(
	id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
	role ENUM('admin', 'editor','registrador') NOT NULL
);


CREATE TABLE asistencia(    
    id INT AUTO_INCREMENT PRIMARY KEY,
     asistio BOOLEAN NOT NULL DEFAULT false,
    hora TIME NOT NULL,
    fecha DATE NOT NULL,
    responsable INT NOT NULL,
    FOREIGN KEY (responsable) REFERENCES users(id)
    ON UPDATE CASCADE
);

CREATE TABLE participantes(    
	id	INT,
    email	VARCHAR(512),
    apellidos	VARCHAR(512),
    nombres	VARCHAR(512),
    tipoDoc	VARCHAR(512),
    nroDoc	INT,
    telefono INT,
    tipoUni	VARCHAR(512),
    universidad	VARCHAR(512)
);

ALTER TABLE ponentes
ADD COLUMN idAsis INT,
ADD FOREIGN KEY (idAsis) REFERENCES asistencia(id)
ON UPDATE CASCADE
ON DELETE CASCADE;

CREATE TABLE ponentes(    
	id	INT,
    denom	VARCHAR(512),
    grado	VARCHAR(512),
	apellidos	VARCHAR(512),
    nombres	VARCHAR(512),
    nroDoc	INT,
    telefono	INT,
    tipoUni	VARCHAR(512),
    universidad	VARCHAR(512),
    presentacion	VARCHAR(512)
);




DROP TABLE asistencia;
select * FROM ponentes;
select * FROM participantes;
--  DROP TRIGGER actualizar_asistencia;
-- TRIGGER
DELIMITER //

CREATE TRIGGER actualizar_asistencia
BEFORE UPDATE ON asistencia
FOR EACH ROW
BEGIN
	-- IF NEW.Ticket <> OLD.Ticket AND NEW.Ticket <> 0 THEN
    IF NEW.Ticket <> 0 THEN
        SET NEW.Asistio = 'Si';
        SET NEW.HoraAsistencia = DATE_FORMAT(DATE_SUB(NOW(), INTERVAL 5 HOUR), '%H:%i:%s');
        SET NEW.FechaAsistencia = DATE_FORMAT(DATE_SUB(NOW(), INTERVAL 5 HOUR), '%Y-%m-%d');
    END IF;
END//

DELIMITER ;


-- PARTICIPANTES
-- SET SQL_SAFE_UPDATES = 1; Desactivar Safety Mode

-- UPDATE ponentes SET apellidos = UPPER(apellidos); Cambiar a mayusculas

INSERT INTO participantes (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipoUni, universidad) VALUES
	('1', 'jtejada@unc.edu.pe', 'TEJADA CAMPOS ', 'JORGE NELSON', 'DNI', '26709691', '950082700', 'Público', 'Universidad Nacional de Cajamarca'),
	('2', 'mcardenasherreta@hotmail.com', 'CARDENAS HERRERA', 'MABEL', 'DNI', '29268089', '952341039', 'Privado', 'Universidad Privada de Tacna'),
	('3', 'betzy.llerena@uniq.edu.pe', 'LLERENA CAJIGAS', 'BETZY ZEYTEL', 'DNI', '23980283', '984702728', 'Público', 'Universidad Nacional Intercultural de Quillabamba'),
	('4', 'lhuaillapuma@unaj.edu.pe', 'HUAILLAPUMA SANTA CRUZ', 'LUIS MARTIN', 'DNI', '1307667', '951837930', 'Público', 'Universidad Nacional de Juliaca'),
	('5', 'jcaceres@ucsm.edu.pe', 'CACERES ARCE', 'JORGE LUIS', 'DNI', '29308363', '953759003', 'Privado', 'Universidad Católica de Santa María'),
	('6', 'vtapia@unaj.edu.pe', 'TAPIA CCALLO', 'VILMA VALERIANA', 'DNI', '1323174', '950852473', 'Público', 'Universidad Nacional de Juliaca'),
	('7', 'calidad@unajma.edu.pe', 'LEYVA AGUILAR', 'JACK ERIK', 'DNI', '47056645', '944420447', 'Público', 'Universidad Nacional José María Arguedas'),
	('8', 'mbarrazar@ucv.edu.pe', 'BARRAZA RIVAS', 'MARIA GEORGINA', 'DNI', '41795126', '940409688', 'Privado', 'Universidad César Vallejo'),
	('9', 'ccastillo@unab.edu.pe', 'CUBA CASTILLO', 'CARLOS ANDRÉS', 'DNI', '45708532', '978369750', 'Público', 'Universidad Nacional de Barranca'),
	('10', 'lurquiza@unab.edu.pe', 'URQUIZA SÁNCHEZ', 'LUIS ENRIQUE', 'DNI', '41932894', '944220730', 'Público', 'Universidad Nacional de Barranca'),
	('11', 'vicerrectoradoacademico@uncp.edu.pe', 'CARO MEZA ', 'ELÍ TEOBALDO', 'DNI', '19839712', '964312232', 'Público', 'Universidad Nacional del Centro del Perú'),
	('12', 'dreyesv@unp.edu.pe', 'REYES VÁSQUEZ ', 'DUBERT ', 'DNI', '2650156', '969911526', 'Público', 'Universidad Nacional de Piura'),
	('13', 'iaquino@uncp.edu.pe', 'AQUINO PALACIOS', 'INGRID MARITZA', 'DNI', '20644422', '964735903', 'Público', 'Universidad Nacional del Centro del Perú'),
	('14', 'smolero@unamad.edu.pe', 'MOLERO QUISPE', 'SHERELY ', 'DNI', '48501445', '986133655', 'Público', 'Universidad Nacional Amazónica de Madre de Dios'),
	('15', 'ggaray@unab.edu.pe', 'GARAY LIVIA', 'GLADYS LUZ', 'DNI', '6076181', '999004595', 'Público', 'Universidad Nacional de Barranca'),
	('16', 'nreynaga@pucp.edu.pe', 'REYNAGA BERNAOLA', 'NATALIE', 'DNI', '43425016', '956870880', 'Privado', 'Pontificia Universidad Católica del Perú'),
	('17', 'cooperacion.tecnica@unca.edu.pe', 'MORALES CHAMORRO', 'EDGARDO NAPOLEÓN', 'DNI', '19560868', '942601311', 'Público', 'Universidad Nacional Ciro Alegría'),
	('18', 'vice.academico@unca.esu.pe', 'PUMACALLAHUI SALCEDO', 'ELISEO', 'DNI', '23965852', '956277455', 'Público', 'Universidad Nacional Ciro Alegría'),
	('19', 'genarog2014@gmail.com', 'VILLALTA CUBA', 'GENARO', 'DNI', '47163998', '944502196', 'Público', 'Universidad Nacional Amazónica de Madre de Dios'),
	('20', 'kazabachea@ucv.edu.pe', 'AZABACHE ALVARADO', 'KARLA ADRIANA', 'DNI', '40867820', '956318007', 'Privado', 'Universidad César Vallejo'),
	('21', 'gcarranza@ucv.edu.pe', 'CARRANZA OBESO', 'GRISELDA CONSUELO', 'DNI', '17919603', '949427942', 'Privado', 'Universidad César Vallejo'),
	('22', 'egutierrez@ucv.edu.pe', 'GUTIERREZ SANDOVAL', 'EVERT VLADIMIR', 'DNI', '43617122', '950119647', 'Privado', 'Universidad César Vallejo'),
	('23', 'jshupingahua@ucv.edu.pe', 'SHUPINGAHUA PEZO', 'JANINA', 'DNI', '41572491', '968415649', 'Privado', 'Universidad César Vallejo'),
	('24', 'gfigueroaa@pucp.edu.pe', 'FIGUEROA ALCÁZAR', 'GUADALUPE CRISTINA', 'DNI', '43648170', '992134792', 'Privado', 'Pontificia Universidad Católica del Perú'),
	('25', 'lbaca@unamba.edu.pe', 'BACA MEJÍA ', 'LUZ MARINA ', 'DNI', '23874095', '984660452', 'Público', 'Universidad Nacional Micaela Bastidas de Apurímac'),
	('26', 'gdelgadoc@ucv.edu.pe', 'DELGADO COTRINA', 'GERMAN OSWALDO', 'DNI', '10688593', '990047770', 'Privado', 'Universidad César Vallejo'),
	('27', 'bramirez@ucv.edu.pe', 'RAMIREZ MEDINA', 'BLANCA ELISA', 'DNI', '40611530', '948035174', 'Privado', 'Universidad César Vallejo'),
	('28', 'jdvalver@unsm.edu.pe', 'VALVERDE IPARRAGUIRRE', 'JORGE DAMIAN', 'DNI', '18141505', '950976821', 'Público', 'Universidad Nacional de San Martín'),
	('29', 'pcortez@unamba.edu.pe', 'CORTEZ MIRANDA', 'PERCY LEONIDAS', 'DNI', '7462712', '969525243', 'Público', 'Universidad Nacional Micaela Bastidas de Apurímac'),
	('30', 'adrimabl6@gmail.com', 'HUANCA POMA', 'MABEL', 'DNI', '70910769', '971110999', 'Público', 'Universidad Nacional Amazónica de Madre de Dios'),
	('31', 'ccuentas@unamba.edu.pe', 'CUENTAS CARRERA', 'CESAR EDUARDO', 'DNI', '29352290', '941469036', 'Público', 'Universidad Nacional Micaela Bastidas de Apurímac'),
	('32', 'cjotaz@uucsp.edu.pe', 'OTAZÚ RIVERA', 'CHRISTIAN JESÚS EDUARDO', 'DNI', '46004137', '962771392', 'Privado', 'Universidad Católica San Pablo'),
	('33', 'cnajarro@ucv.edu.pe', 'NAJARRO HERRERA', 'CAROLA ANDREA', 'DNI', '46612796', '983853658', 'Privado', 'Universidad César Vallejo'),
	('34', 'gabrielazapata466@gmail.com', 'ZAPATA CHIPANA', 'GABRIELA ELENA', 'DNI', '72779108', '943113360', 'Público', 'Universidad Nacional Micaela Bastidas de Apurímac'),
	('35', 'azavaleta@uniq.edu.pe', 'ZAVALETA QUISPE', 'ADOLFO ', 'DNI', '24702037', '904793027', 'Público', 'Universidad Nacional Intercultural de Quillabamba'),
	('36', 'viceacademico@unsm.edu.pe', 'HIDALGO POZZI', 'ROSSANA HERMINIA', 'DNI', '7618465', '942878542', 'Público', 'Universidad Nacional de San Martín'),
	('37', 'aruiz@unsm.edu.pe', 'RUIZ RIOS', 'ASTRIHT', 'DNI', '1223099', '950414010', 'Público', 'Universidad Nacional de San Martín'),
	('38', 'whuisa@uch.edu.pe', 'HUISA ARIAS ', 'WALTER', 'DNI', '7543368', '959569043', 'Privado', 'Universidad de Ciencias y Humanidades'),
	('39', 'jvilchez@uch.edu.pe', 'VILCHEZ SANDOVAL', 'JESUS ALBERTO', 'DNI', '40788094', '970405254', 'Privado', 'Universidad de Ciencias y Humanidades'),
	('40', 'jmendoza@unamba.edu.pe', 'MENDOZA CACERES', 'JORGE BELTRAN', 'DNI', '9760599', '989017101', 'Público', 'Universidad Nacional Micaela Bastidas de Apurímac'),
	('41', 'grcardenas@lamolina.edu.pe', 'CÁRDENAS MEDINA', 'GIULIANA RUTHBELY', 'DNI', '40379813', '993726352', 'Público', 'Universidad Nacional Agraria la Molina'),
	('42', 'dianarojas@lamolina.edu.pe', 'ROJAS VELÁSQUEZ', 'DIANA ESTEFANY ', 'DNI', '73740001', '952323028', 'Público', 'Universidad Nacional Agraria la Molina'),
	('43', 'gmatos@lamolina.edu.pe', 'MATOS CUZCANO', 'GISELLA LILIANA', 'DNI', '9430402', '989821690', 'Público', 'Universidad Nacional Agraria la Molina'),
	('44', 'cristhiansalazar@unat.edu.pe', 'SALAZAR VELASQUEZ', 'CRISTHIAN', 'DNI', '46240976', '988001062', 'Público', 'Universidad Nacional Autónoma de Tayacaja “Daniel Hernández Morillo”'),
	('45', 'malbans@unp.edu.pe', 'ALBÁN SUÁREZ', 'MARÍA GETRUDIS', 'DNI', '2631510', '968846694', 'Público', 'Universidad Nacional de Piura'),
	('46', 'bchilon@ucv.edu.pe', 'CHILON ROJAS', 'BELEN PAHOLA', 'DNI', '46071935', '995360756', 'Privado', 'Universidad César Vallejo'),
	('47', 'gvalencia@unamad.edu.pe', 'VALENCIA PARI ', 'GRISELDA YENI ', 'DNI', '46752003', '931713246', 'Público', 'Universidad Nacional Amazónica de Madre de Dios'),
	('48', 'korimiranda1@gmail.com', 'MIRANDA FLORES DE HUAMANCAYO ', 'ANALI', 'DNI', '60594856', '933347109', 'Público', 'Universidad Nacional Amazónica de Madre de Dios'),
	('49', 'mmesia@utea.edu.pe', 'MESIA NOMBERTO', 'MIRTHA ELIANA', 'DNI', '25573490', '980482813', 'Privado', 'Universidad Tecnológica de los Andes'),
	('50', 'aamado@ucsm.edu.pe', 'AMADO MENDOZA', 'ANA MARÍA', 'DNI', '29663122', '959554705', 'Privado', 'Universidad Católica de Santa María'),
	('51', 'mpalaciosc@ucv.edu.pe', 'PALACIOS CRUZ  ', 'MARILUZ ROCÍO', 'DNI', '2767110', '969522311', 'Privado', 'Universidad César Vallejo'),
	('52', 'ipizarro@usat.edu.pe', 'PIZARRO CASTRO', 'ISIS BRUNELLA', 'DNI', '71850818', '951655908', 'Privado', 'Universidad Católica Santo Toribio de Mogrovejo'),
	('53', 'vmvm900@unsm.edu.pe', 'VALLEJOS MONJA ', 'VICTOR MANUEL', 'DNI', '42183659', '953647471', 'Público', 'Universidad Nacional de San Martín'),
	('54', 'rrodriguezr@ucv.edu.pe', 'RODRIGUEZ RAVELO', 'ROGER ALBERTO', 'DNI', '18138507', '949787842', 'Privado', 'Universidad César Vallejo'),
	('55', 'yquintana@unajma.edu.pe', 'QUINTANA', 'NAVIO', 'DNI', '46817637', '998900071', 'Público', 'Universidad Nacional José María Arguedas'),
	('56', 'acreditacionogc@unajma.edu.pe', 'ENCISO CHOQUETICO', 'ALEXANDRA ROXANA', 'DNI', '73371684', '953272347', 'Público', 'Universidad Nacional José María Arguedas'),
	('57', 'iveilz@pucp.pe', 'VELIZ ALVAREZ', 'ISABEL ROXANA', 'DNI', '9855748', '993059401', 'Privado', 'Pontificia Universidad Católica del Perú'),
	('58', 'dvillasantep@utea.edu.pe', 'VILLASANTE PAZ', 'DUSAN', 'DNI', '80035604', '984261776', 'Privado', 'Universidad Tecnológica de los Andes'),
	('59', 'michael.alcazar@unica.edu.pe', 'ALCÁZAR HUARCAYA ', 'MICHAEL VLADIMIR ', 'DNI', '21459418', '956657170', 'Público', 'Universidad Nacional San Luis Gonzaga'),
	('60', 'maria.ecos@unica.edu.pe', 'ECOS MENDIZ', 'MARIA ELENA', 'DNI', '45204031', '961513135', 'Público', 'Universidad Nacional San Luis Gonzaga'),
	('61', 'mhuerta@uns.edu.pe', 'HUERTA FLORES', 'MARIA MAGDALENA', 'DNI', '32929994', '943570358', 'Público', 'Universidad Nacional del Santa'),
	('62', 'edudiazgo823@gmail.com', 'DIAZ GONZALES', 'EUDUALDO', 'DNI', '27740611', '945169768', 'Público', 'Universidad Nacional de Jaén'),
	('63', 'harsisa@virtual.upt.pe', 'SISA YATACO', 'HAYDEE RAQUEL', 'DNI', '42703088', '964747443', 'Privado', 'Universidad Privada de Tacna'),
	('64', 'ccnavarro@ucss.edu.pe', 'NAVARRO MONTEAGUDO', 'CARMEN CECILIA', 'DNI', '7517476', '927728176', 'Privado', 'Universidad Católica Sedes Sapientiae'),
	('65', 'giovana.serna@uniq.edu.pe', 'SERNA SILVA ', 'GIOVANNA JACKELINE ', 'DNI', '23839855', '965909019', 'Público', 'Universidad Nacional Intercultural de Quillabamba'),
	('66', 'fperezv@utea.edu.pe', 'PEREZ VILLCA', 'FRESHIA BERYOSKA', 'DNI', '70570922', '970638240', 'Privado', 'Universidad Tecnológica de los Andes'),
	('67', 'jlijarza@ucss.edu.pe', 'LIJARZA OLIVERA', 'JAVIER', 'DNI', '41837794', '902311169', 'Privado', 'Universidad Católica Sedes Sapientiae'),
	('68', 'renatto.motta@uniq.edu.pe', 'MOTTA ZEVALLOS', 'RENATTO NICOLINO', 'DNI', '23962394', '996663606', 'Público', 'Universidad Nacional Intercultural de Quillabamba'),
	('69', 'icusi@uniq.edu.pe', 'CUSI OLMEDA', 'ILIANA FANNY', 'DNI', '43975806', '976333768', 'Público', 'Universidad Nacional Intercultural de Quillabamba'),
	('70', 'vmaleman@unap.edu.pe', 'ALEMÁN PALOMINO ', 'VÍCTOR MARTÍN ', 'DNI', '1325050', '951715510', 'Público', 'Universidad Nacional del Altiplano'),
	('71', 'ralcos@unap.edu.pe', 'ALCOS CHURA', 'REYNALDO', 'DNI', '1308350', '951881488', 'Público', 'Universidad Nacional del Altiplano'),
	('72', 'bruiz@unap.edu.pe', 'RUIZ TAPIA', 'BIBIANA', 'DNI', '1201353', '951129428', 'Público', 'Universidad Nacional del Altiplano'),
	('73', 'jmartinez@unap.edu.pe', 'MARTINEZ FRANCO', 'JUAN DANIEL ', 'DNI', '1305887', '951600411', 'Público', 'Universidad Nacional del Altiplano'),
	('74', 'lcahuanam@unap.edu.pe', 'CAHUANA MEDRANO ', 'LISBETH DEIDA ', 'DNI', '40706874', '965136600', 'Público', 'Universidad Nacional del Altiplano'),
	('75', 'lcharaja@unap.edu.pe', 'CHARAJA FERNANDEZ ', 'LITZBEL ', 'DNI', '40517509', '951523343', 'Público', 'Universidad Nacional del Altiplano'),
	('76', 'jarcaya@unap.edu.pe', 'ARCAYA COYURI', 'JUAN GUILLERMO', 'DNI', '1333215', '951778418', 'Público', 'Universidad Nacional del Altiplano'),
	('77', 'mzcalizaya@unap.edu.pe', 'CALIZAYA LUQUE', 'MAGLY ZELMIRA ROSARIO', 'DNI', '1340071', '980400776', 'Público', 'Universidad Nacional del Altiplano'),
	('78', 'vmariaca@unap.edu.pe', 'MARIACA CANAZA', 'VIANNEY MARIELA ', 'DNI', '40183370', '951883986', 'Público', 'Universidad Nacional del Altiplano'),
	('79', 'mromani@unap.edu.pe', 'ROMANI ALEJO', 'MARCO FÉLIX ', 'DNI', '40294304', '930984575', 'Público', 'Universidad Nacional del Altiplano'),
	('80', 'delbyn.agr@gmail.com', 'GUITERAS RUIZ', 'DELBYN ANDREE', 'DNI', '70869564', '965796543', 'Público', 'Universidad Nacional del Altiplano'),
	('81', 'mvaler@unap.edu.pe', 'VALER HACHA', 'MARTHA BEATRIZ', 'DNI', '24884423', '951846337', 'Público', 'Universidad Nacional del Altiplano'),
	('82', 'mihailagente19@gmail.com', 'GUITERAS RUIZ', 'MIHAIL ANGEL', 'DNI', '70869565', '946626965', 'Público', 'Universidad Nacional del Altiplano'),
	('83', 'leonardo.corahua@unsaac.edu.pe', 'CORAHUA SALCEDO', 'LEONARDO', 'DNI', '23962857', '9360057', 'Público', 'Universidad Nacional San Antonio Abad del Cusco'),
	('84', 'uballadares@uandina.edu.pe', 'BALLADARES APARICIO', 'URIEL', 'DNI', '23810531', NULL, 'Privado', 'Universidad Andina del Cusco'),
	('85', 'ycastro@uandina.edu.pe', 'CASTRO VARGAS', 'YANET', 'DNI', '23955308', NULL, 'Privado', 'Universidad Andina del Cusco'),
	('86', 'cganvini@uandina.edu.pe', 'GANVINI VALCARCEL', 'CRISTHIAN EDUARDO ', 'DNI', '23920560', NULL, 'Privado', 'Universidad Andina del Cusco'),
	('87', 'afloresc@uandina.edu.pe', 'FLORES CONTRERAS', 'AYDEE ', 'DNI', '23818613', NULL, 'Privado', 'Universidad Andina del Cusco'),
	('88', 'rmarino@uandina.edu.pe', 'MARIÑO LOAIZA', 'RUBÉN TITO', 'DNI', '23886954', NULL, 'Privado', 'Universidad Andina del Cusco'),
	('89', 'gticona@unap.edu.pe', 'TICONATITO', 'GRACIELA VICTORIA', 'DNI', '29339114', '953768455', 'Público', 'Universidad Nacional del Altiplano'),
	('90', 'claudiavillegas@unap.edu.pe', 'VILLEGAS ABRILL', 'CLAUDIA BEATRIZ', 'DNI', '29617161', '956782811', 'Público', 'Universidad Nacional del Altiplano'),
	('91', 'jbegazo@unap.edu.pe', 'BEGAZO MIRANDA', 'JOSÉ OSCAR ALBERTO', 'DNI', '1343700', '951525605', 'Público', 'Universidad Nacional del Altiplano'),
	('92', 'garridozadith@gmail.com', 'GARRIDO CAMPAÑA', 'ZADITH NANCY ', 'DNI', '43235341', '937643721', 'Público', 'Universidad Nacional de Jaén'),
	('93', NULL, 'BARRAGANB CONDORI', 'MELQUIADEZ', 'DNI', '23979306', NULL, 'Público', 'Universidad Nacional Intercultural de Quillabamba'),
	('94', NULL, 'LEON LEGUIA', 'CRISTINA', 'DNI', '45453134', NULL, 'Público', 'Universidad Nacional José María Arguedas'),
	('95', 'luisgarcia@unsm.edu.pe ', 'GARCIA VELA ', 'LUIS RAFAEL', 'DNI', '41607912', '959419388', 'Público', 'Universidad Nacional de San Martín'),
	('96', 'magalvez@unsm.edu.pe ', 'GALVEZ DÍAZ ', 'MARCO ARMANDO', 'DNI', '1080605', '942818980', 'Público', 'Universidad Nacional de San Martín'),
	('97', 'dencomenderos@unsm.edu.pe ', 'ENCOMENDEROS DÁVALOS', 'DANNY OLDY', 'DNI', '18092156', '953625028', 'Público', 'Universidad Nacional de San Martín'),
	('98', 'herlinda.calderon@unsch.edu.pe', 'CALDERON GONZALES', 'HERLINDA', 'DNI', '28203800', '995208673', 'Público', 'Universidad Nacional de San Cristóbal de Huamanga'),
	('99', 'da.agronomiatropical@uniq.edu.pe', 'CESPEDES DEL POZO', 'WILTON HENRY', 'DNI', '23853004', NULL, 'Público', 'Universidad Nacional Intercultural de Quillabamba'),
	('100', 'lmelgarp@utea.edu.pe', 'MELGAR PACHECO', 'IRIS', 'DNI', '9706265', '983600519', 'Privado', 'Universidad Tecnológica de los Andes'),
	('101', 'mntapia@unap.edu.pe', 'TAPIA INFANTES', 'MARTHA NANCY', 'DNI', '01227077', NULL, 'Público', 'Universidad Nacional del Altiplano'),
	('102', NULL, 'PORTOCARRERO PRADO', 'HARNOLD SEGUNDO', 'DNI', '01321403', NULL, 'Público', 'Universidad Nacional del Altiplano'),
	('103', 'rdelacuz@uncp.edu.pe', 'DE LA CRUZ MISARI', 'ROCÍO GLORIA', 'DNI', '19817114', '961931908', 'Público', 'Universidad Nacional del Centro del Perú'),
	('104', 'wsancarrancoc@unp.edu.pe', 'SANCARRANCO CÓRDOVA', 'WILSON GERÓNIMO', 'DNI', '2621831', '968826414', 'Público', 'Universidad Nacional de Piura'),
	('105', 'manuel.cortesfontcuberta@upc.edu.pe', 'CORTES FONTCUBERTA ABUCCI', 'MANUEL PEDRO', 'DNI', '09378051', '989048904', 'Privado', 'Universidad Peruana de Ciencias Aplicadas'),
	('106', 'glendy_sanchez@unu.edu.pe', 'Sánchez Sunción ', 'Glendy ', 'DNI', '00095730', '961529502', 'Público', 'Universidad Nacional de Ucayali'),
	('107', 'hcamposv@unf.edu.pe', 'CAMPOS VASQUEZ', 'HENRY', 'DNI', '71478501', '948640233', 'Público', 'Universidad Nacional de Frontera'),
	('108', 'gezcurraz@untumbes.edu.pe', 'Ezcurra zavaleta', 'Ghenkis Amilcar', 'DNI', '40936824', '942035597', 'Público', 'Universidad Nacional de Tumbes'),
	('109', 'mtesen@usat.edu.pe', 'TESEN ARROYO', 'MARTHA ELINA', 'DNI', '17627801', '992302061', 'Privado', 'Universidad Católica Santo Toribio de Mogrovejo'),
	('110', 'jabril@ucsm.edu.pe', 'ABRIL VERA', 'JUAN SERGIO', 'DNI', '72220614', '942358629', 'Privado', 'Universidad Católica de Santa María'),
	('111', 'eyendiracg@gmail.com', 'CRISTOBAL GALLO', 'YENDIRA INÉS', 'DNI', '43874258', '934102646', 'Privado', 'Universidad Autónoma de Ica'),
	('112', 'judbedoya@upt.pe', 'Bedoya Chanove', 'Juana del Carmen', 'DNI', '00416677', '967765894', 'Privado', 'Universidad Privada de Tacna'),
	('113', 'iduenias@unach.edu.pe', 'Dueñas Sayaverde', 'Isaías Wilmer', 'DNI', '27432969', '996066997', NULL, 'Universidad Nacional Autónoma de Chota, '),
	('114', 'csuarez@unach.edu.pe', ' Suarez Sanchez', 'Carlos', 'DNI', '27432969', '997399801', NULL, 'Universidad Nacional Autónoma de Chota, '),
	('115', 'alam@unf.edu.pe', 'LAM REYES', 'ALEX FERNANDO', 'DNI', '02891274', '940475449', 'Público', 'Universidad Nacional de Frontera'),
	('116', 'vgomez@unc.edu.pe', 'Gómez Vargas', 'Virgilio', 'DNI', '26682819', NULL, 'Publico', 'Universida Nacional de Cajamarca'),
	('117', 'tatifer92_07@hotmail.com', 'Fernández Miranda', 'Tattiana', 'DNI', '46907174', NULL, 'Publico', 'Universidad Nacional Autónoma de Chota'),
	('118', 'jmiranda@unc.edu.pe', 'Miranda Castro', 'Juan Sergio', 'DNI', '26615010', NULL, 'Publico', 'Universidad Nacional de Cajamarca'),
	('119', 'cjotazu@ucsp.edu.pe', 'Otazú Rivera', 'Christian Jesús Eduardo', 'DNI', '46004137', NULL, 'Privado', 'Universidad Católica San Pablo'),
	('120', 'mochoag@utea.edu.pe', 'Ochoa Guillén', 'Maricela', 'DNI', '23915574', '983792378', 'Privado', 'Universidad Tecnológica de los Andes'),
	('121', 'walter.antezana@unsaac.edu.pe', 'Orestes Antezana', 'Walter Julian', 'DNI', '23943240', NULL, 'Publico', 'Universidad Nacional San Antonio Abad del Cusco'),
	('122', 'clara.rios@unsaac.edu.pe', 'Rios Caballero', 'Clara Yadira', 'DNI', '76756674', NULL, 'Publico', 'Universidad Nacional San Antonio Abad del Cusco'),
	('123', 'milagros.echegaray@unsaac.edu.pe', 'Echegaray Mayorga', 'Milagros', 'DNI', '41584951', NULL, 'Publico', 'Universidad Nacional San Antonio Abad del Cusco'),
	('124', 'urzula.fernandez@unsaac.edu.pe', 'Fernandez Palomino', 'Ursula del  Carmen', 'DNI', '71637530', NULL, 'Publico', 'Universidad Nacional San Antonio Abad del Cusco'),
	('125', 'ronald_2303@yahoo.es', 'Tello Fernandez', 'Ronald', 'DNI', '52464787', NULL, 'Publico', 'Universidad Nacional de la Amazonía Peruana'),
	('126', 'melguera@utea.edu.pe', 'Elguera Hilares', 'Mari Luz', 'DNI', '31042439', '983689990', 'Privado', 'Universidad Tecnológica de los Andes'),
	('127', 'lbaca@unamba.edu.pe', 'Baca Mejia', 'LUZ MARINA ', 'DNI', '23874095', NULL, 'Publico', 'Universidad Nacional Micaela Bastidas de Apurimac'),
	('128', 'nvelasquez@ucss.edu.pe', 'Velásquez Rodríguez', 'Norma Constanza', 'DNI', '8172294', '987214176', NULL, 'Universidad Católica Sedes Sapientiae'),
	('129', 'rectorado@unasam.edu.pe', 'Reyes Pareja', 'Carlos Antonio ', 'DNI', '31614036', NULL, 'Publico', 'Universidad Nacional Santiago Antúnez de MAYOLO');


-- Ponentes 

INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('1', 'Señora', 'Licenciada', 'Lima Valdivia', 'Lourdes Marleni', '238400720', '991316873', 'Privada', 'Universidad Andina del Cusco', 'Plan de Desarrollo Académico Docente');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('2', 'Señora', 'Dra.', 'Jo Insua', 'Giselle', '40116464', '980123168', 'Privada', 'Instituto para la Calidad de la Pontificia Universidad Católica del Perú', 'Integración de los lineamientos CBC R I, acreditación Sineace e ISO 21001 
');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('3', 'Señora ', 'Mgt.', 'Reynaga', 'Natalie', '43425016', '956870880', 'Privada', 'Instituto para la Calidad de la Pontificia Universidad Católica del Perú', 'Integración de los lineamientos CBC R I, acreditación Sineace e ISO 21001 
');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('4', 'Señor', 'Ing.', 'Chuco Valenzuela', 'Wilfredo Florentino', '207102135', NULL, 'Privada', 'Compañía Minera Poderosa S.A', 'El COLPA (5S) como base para la excelencia operativa
');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('5', 'Señor', 'Dr.', 'Ojeda Perez', 'José Miguel', '42674270', '932303970', 'Pública', 'Universidad Nacional Intercultural Fabiola Salazar Leguía', 'Modelo educativo para universidades interculturales
');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('6', 'Señor', 'Dr.', 'Adauto', 'Jhosafath', '71465593', '970908085', 'Privada', 'Universidad de Ingeniería y Tecnología', 'Assessment y Mejora Continua de la Universidad ');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('7', 'Señora', 'Dra.', 'Mazuelos Chávez', 'Eliana', '01316608', '951901908', 'Pública', 'Universidad Nacional del Altiplano', 'Componente Plan de Estudios en las Condiciones Básicas de Calidad del Modelo de Renovación de Licencia Institucional');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('8', 'Señor', 'Dr.', 'Leyva Aguilar ', 'Jack Erick', '47056645', '944420447', 'Pública', 'Universidda Nacional José María Arguedas', 'Alineamiento del Modelo de Renovación de Licenciamiento con los Modelos de Acreditación Internacional ICACIT y ACBSP en la UNAJMA.
');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('9', 'Señora', 'Dra.', 'Gambetta Quelopana', 'Renza Lourdes', '00514658', '952398800', 'Privada', 'Universidad Privada de Tacna', 'Estrategias y métricas hacia la construcción de indicadores para optimizar la calidad educativa
');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('10', 'Señor', 'Mg. ', 'Mellin Rubio', 'Harley', '70025384', NULL, 'Pública', 'SUNEDU', 'CBC-R I: Gestión estratégica y soporte institucional.');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('11', 'Señor', 'Dr.', 'Campana Añasco', 'Heraclio', '31034678', '999148817', 'Privada', 'Universidad Cesar Vallejo', 'Estrategias Efectivas en la Evaluación para la Renovación de la Licencia Institucional.');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('12', 'Señora', 'Dra. ', 'Aquino Palacios', 'Ingrid Maritza', '20644422', '964735903', 'Pública', 'Universidad Nacional de Centro del Perú', 'Experiencias académicas para el relicenciamiento ');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('13', 'Señora', 'Dra. ', 'Sarmiento Mamani ', 'Vilma', '013294246', NULL, 'Pública', 'Universidad Nacional de Juliaca', 'Mapeo Curricular');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('14', 'Señora', 'Dra. ', 'Tapia Callo', 'Vilma Valeriana', '01323174', '950852473', 'Pública', 'Universidad Nacional de Juliaca', 'Mapeo Curricular');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('15', 'Señora', 'Dra', 'Cárdenas Herrera', 'Mabel', '29268089', '952341039', 'Privada', 'Universidad Privada de Tacna', 'Gestión estratégica en el proceso pedagógico de calidad');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('16', 'Señora', 'Dra. ', 'Villacorta Castro', 'Nay Ruth Madeleyne', '00487960', '952387834', 'Privada', 'Universidad Privada de Tacna', 'Gestión estratégica en el proceso pedagógico de calidad');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('17', 'Señora', 'Mgt.', 'Zapata Del Río', 'Claudia Maria del Pilar', '10799864', '995043660', 'Privada', 'Pontificia Universidad Católica del Perú', 'Proceso participativo en la elaboración de documentos orientadores de la gestión universitaria y PEI');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('18', 'Señora', 'Lic.', 'Figueroa Alcazar', 'Guadalupe Cristina', '43648170', '992134792', 'Privada', 'Pontificia Universidad Católica del Perú', 'Proceso participativo en la elaboración de documentos orientadores de la gestión universitaria y PEI');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('19', 'Señor ', 'Dr.', 'Miranda Castillo', 'Ralph', '40941903', '986862648', 'Pública', 'Universidad Nacional Amazónica de Madre de Dios', 'Evaluación del Plan de Estudios');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('20', 'Señor', 'Msc.', 'Huayanay Espinoza', 'Carlos Andres', '70214397', '997915901', 'Privada', 'Universidad Peruana Cayetano Heredia', 'Estrategias para afrontar el diseño e implementación de un plan de mejora para la presentación de un expediente de Renovación de Licencia a SUNEDU');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('21', 'Señora', 'Mgt.', 'Flores Correa', 'María Fabiola', '02822369', '969754934', 'Privada', 'Universidad de Piura', 'Proceso de elaboración del modelo educativo');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('22', 'Señora', 'Dra.', 'Mestanza Calderón', 'Vannia', '73782359', '958317973', 'Privada', 'Pontificia Universidad Católica del Perú', 'Evaluación de las competencias del perfil de egreso
');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('23', 'Señor', 'Dr. ', 'Quiroz Aguirre', 'Gualverto Federico', '06824428', '991842404', 'Pública', 'Universidad Nacional de Educación Enrique Guzmán y Valle', 'Metodología holística para el alineamiento de las CBC- R I y CBC-R II');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('24', 'Señora', 'Dra. ', 'Zuta Arriola', 'Noemí', '16701143', '986601772', 'Pública', 'Universidad Nacional del Callao', 'Hacia una universidad sostenible: estratégias y compromiso');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('25', 'Señora', 'Dra.', 'Ortega Rojas', 'Yesmi Katia', '06798112', '997560314', 'Pública', 'Universidad Nacional del Callao', 'Hacia una universidad sostenible: estratégias y compromiso');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('26', 'Señor', 'Mg. ', 'Mellin Rubio', 'Harley', '70025384', NULL, 'Pública', 'SUNEDU', ' CBC-R II: Docencia y enseñanza aprendizaje.');
INSERT INTO ponentes (id, denom, grado,  apellidos, nombres, nroDoc, telefono, tipoUni, universidad, presentacion) VALUES ('27', 'Señor', 'Ing.', 'Silva Barboza', 'Elger Orlando', '47412777', '999066908', 'Pública', 'Universidad Nacional Intercultural Fabiola Salazar leguía de Bagua', ' Deserción Universitaria en Universidades Interculturales ');

