USE railway;

-- CREATE TABLE asistencia(    
-- 	CodigoCIP	INT,
--     TipoDoc	VARCHAR(512),
--     DocIdentidad	INT,
--     Nombres	VARCHAR(512),
--     Capitulo	VARCHAR(512),
--     Asociacion	VARCHAR(512),
--     Inscrito	VARCHAR(512),
--     Sede	VARCHAR(512),
--     Ticket	VARCHAR(512),
--     Asistio	VARCHAR(512),
--     HoraAsistencia	VARCHAR(512),
--     FechaAsistencia	VARCHAR(512)
-- );


CREATE TABLE tokens(
	id INT AUTO_INCREMENT PRIMARY KEY,
    token TEXT NOT NULL
);

CREATE TABLE users(
	id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
	role ENUM('admin', 'student') NOT NULL
);




CREATE TABLE asistencia(    
    id	INT,
    email	VARCHAR(512),
    apellidos	VARCHAR(512),
    nombres	VARCHAR(512),
    tipoDoc	VARCHAR(512),
    nroDoc	INT,
    telefono	INT,
    tipo	VARCHAR(512),
    universidad	VARCHAR(512),
);

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


INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('1', 'jtejada@unc.edu.pe', 'TEJADA CAMPOS ', 'JORGE NELSON', 'DNI', '26709691', '950082700 O 984149689', 'Público', 'Universidad Nacional de Cajamarca');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('2', 'mcardenasherreta@hotmail.com', 'CARDENAS HERRERA', 'MABEL', 'DNI', '29268089', '952341039', 'Privado', 'Universidad Privada de Tacna');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('3', 'betzy.llerena@uniq.edu.pe', 'LLERENA CAJIGAS', 'BETZY ZEYTEL', 'DNI', '23980283', '984702728', 'Público', 'Universidad Nacional Intercultural de Quillabamba');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('4', 'lhuaillapuma@unaj.edu.pe', 'HUAILLAPUMA SANTA CRUZ', 'LUIS MARTIN', 'DNI', '1307667', '951837930', 'Público', 'Universidad Nacional de Juliaca');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('5', 'jcaceres@ucsm.edu.pe', 'CACERES ARCE', 'JORGE LUIS', 'DNI', '29308363', '953759003', 'Privado', 'Universidad Católica de Santa María');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('6', 'vtapia@unaj.edu.pe', 'TAPIA CCALLO', 'VILMA VALERIANA', 'DNI', '1323174', '950852473', 'Público', 'Universidad Nacional de Juliaca');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('7', 'calidad@unajma.edu.pe', 'LEYVA AGUILAR', 'JACK ERIK', 'DNI', '47056645', '944420447', 'Público', 'Universidad Nacional José María Arguedas');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('8', 'mbarrazar@ucv.edu.pe', 'BARRAZA RIVAS', 'MARIA GEORGINA', 'DNI', '41795126', '940409688', 'Privado', 'Universidad César Vallejo');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('9', 'ccastillo@unab.edu.pe', 'CUBA CASTILLO', 'CARLOS ANDRÉS', 'DNI', '45708532', '978369750', 'Público', 'Universidad Nacional de Barranca');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('10', 'lurquiza@unab.edu.pe', 'URQUIZA SÁNCHEZ', 'LUIS ENRIQUE', 'DNI', '41932894', '944220730', 'Público', 'Universidad Nacional de Barranca');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('11', 'vicerrectoradoacademico@uncp.edu.pe', 'CARO MEZA ', 'ELÍ TEOBALDO', 'DNI', '19839712', '964312232', 'Público', 'Universidad Nacional del Centro del Perú');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('12', 'dreyesv@unp.edu.pe', 'REYES VÁSQUEZ ', 'DUBERT ', 'DNI', '2650156', '969911526', 'Público', 'Universidad Nacional de Piura');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('13', 'iaquino@uncp.edu.pe', 'AQUINO PALACIOS', 'INGRID MARITZA', 'DNI', '20644422', '964735903', 'Público', 'Universidad Nacional del Centro del Perú');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('14', 'smolero@unamad.edu.pe', 'MOLERO QUISPE', 'SHERELY ', 'DNI', '48501445', '986133655', 'Público', 'Universidad Nacional Amazónica de Madre de Dios');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('15', 'ggaray@unab.edu.pe', 'GARAY LIVIA', 'GLADYS LUZ', 'DNI', '6076181', '999004595', 'Público', 'Universidad Nacional de Barranca');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('16', 'nreynaga@pucp.edu.pe', 'REYNAGA BERNAOLA', 'NATALIE', 'DNI', '43425016', '956870880', 'Privado', 'Pontificia Universidad Católica del Perú');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('17', 'cooperacion.tecnica@unca.edu.pe', 'MORALES CHAMORRO', 'EDGARDO NAPOLEÓN', 'DNI', '19560868', '942601311', 'Público', 'Universidad Nacional Ciro Alegría');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('18', 'vice.academico@unca.esu.pe', 'PUMACALLAHUI SALCEDO', 'ELISEO', 'DNI', '23965852', '956277455', 'Público', 'Universidad Nacional Ciro Alegría');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('19', 'genarog2014@gmail.com', 'VILLALTA CUBA', 'GENARO', 'DNI', '47163998', '944502196', 'Público', 'Universidad Nacional Amazónica de Madre de Dios');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('20', 'kazabachea@ucv.edu.pe', 'AZABACHE ALVARADO', 'KARLA ADRIANA', 'DNI', '40867820', '956318007', 'Privado', 'Universidad César Vallejo');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('21', 'gcarranza@ucv.edu.pe', 'CARRANZA OBESO', 'GRISELDA CONSUELO', 'DNI', '17919603', '949427942', 'Privado', 'Universidad César Vallejo');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('22', 'egutierrez@ucv.edu.pe', 'GUTIERREZ SANDOVAL', 'EVERT VLADIMIR', 'DNI', '43617122', '950119647', 'Privado', 'Universidad César Vallejo');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('23', 'jshupingahua@ucv.edu.pe', 'SHUPINGAHUA PEZO', 'JANINA', 'DNI', '41572491', '968415649', 'Privado', 'Universidad César Vallejo');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('24', 'gfigueroaa@pucp.edu.pe', 'FIGUEROA ALCÁZAR', 'GUADALUPE CRISTINA', 'DNI', '43648170', '992134792', 'Privado', 'Pontificia Universidad Católica del Perú');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('25', 'lbaca@unamba.edu.pe', 'BACA MEJÍA ', 'LUZ MARINA ', 'DNI', '23874095', '984660452', 'Público', 'Universidad Nacional Micaela Bastidas de Apurímac');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('26', 'gdelgadoc@ucv.edu.pe', 'DELGADO COTRINA', 'GERMAN OSWALDO', 'DNI', '10688593', '990047770', 'Privado', 'Universidad César Vallejo');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('27', 'bramirez@ucv.edu.pe', 'RAMIREZ MEDINA', 'BLANCA ELISA', 'DNI', '40611530', '948035174', 'Privado', 'Universidad César Vallejo');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('28', 'jdvalver@unsm.edu.pe', 'VALVERDE IPARRAGUIRRE', 'JORGE DAMIAN', 'DNI', '18141505', '950976821', 'Público', 'Universidad Nacional de San Martín');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('29', 'pcortez@unamba.edu.pe', 'CORTEZ MIRANDA', 'PERCY LEONIDAS', 'DNI', '7462712', '969525243', 'Público', 'Universidad Nacional Micaela Bastidas de Apurímac');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('30', 'adrimabl6@gmail.com', 'HUANCA POMA', 'MABEL', 'DNI', '70910769', '971110999', 'Público', 'Universidad Nacional Amazónica de Madre de Dios');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('31', 'ccuentas@unamba.edu.pe', 'CUENTAS CARRERA', 'CESAR EDUARDO', 'DNI', '29352290', '941469036', 'Público', 'Universidad Nacional Micaela Bastidas de Apurímac');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('32', 'cjotaz@uucsp.edu.pe', 'OTAZÚ RIVERA', 'CHRISTIAN JESÚS EDUARDO', 'DNI', '46004137', '962771392', 'Privado', 'Universidad Católica San Pablo');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('33', 'cnajarro@ucv.edu.pe', 'NAJARRO HERRERA', 'CAROLA ANDREA', 'DNI', '46612796', '983853658', 'Privado', 'Universidad César Vallejo');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('34', 'gabrielazapata466@gmail.com', 'ZAPATA CHIPANA', 'GABRIELA ELENA', 'DNI', '72779108', '943113360', 'Público', 'Universidad Nacional Micaela Bastidas de Apurímac');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('35', 'azavaleta@uniq.edu.pe', 'ZAVALETA QUISPE', 'ADOLFO ', 'DNI', '24702037', '904793027', 'Público', 'Universidad Nacional Intercultural de Quillabamba');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('36', 'viceacademico@unsm.edu.pe', 'HIDALGO POZZI', 'ROSSANA HERMINIA', 'DNI', '7618465', '942878542', 'Público', 'Universidad Nacional de San Martín');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('37', 'aruiz@unsm.edu.pe', 'RUIZ RIOS', 'ASTRIHT', 'DNI', '1223099', '950414010', 'Público', 'Universidad Nacional de San Martín');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('38', 'whuisa@uch.edu.pe', 'HUISA ARIAS ', 'WALTER', 'DNI', '7543368', '959569043', 'Privado', 'Universidad de Ciencias y Humanidades');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('39', 'jvilchez@uch.edu.pe', 'VILCHEZ SANDOVAL', 'JESUS ALBERTO', 'DNI', '40788094', '970405254', 'Privado', 'Universidad de Ciencias y Humanidades');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('40', 'jmendoza@unamba.edu.pe', 'MENDOZA CACERES', 'JORGE BELTRAN', 'DNI', '9760599', '989017101', 'Público', 'Universidad Nacional Micaela Bastidas de Apurímac');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('41', 'grcardenas@lamolina.edu.pe', 'CÁRDENAS MEDINA', 'GIULIANA RUTHBELY', 'DNI', '40379813', '993726352', 'Público', 'Universidad Nacional Agraria la Molina');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('42', 'dianarojas@lamolina.edu.pe', 'ROJAS VELÁSQUEZ', 'DIANA ESTEFANY ', 'DNI', '73740001', '952323028', 'Público', 'Universidad Nacional Agraria la Molina');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('43', 'gmatos@lamolina.edu.pe', 'MATOS CUZCANO', 'GISELLA LILIANA', 'DNI', '9430402', '989821690', 'Público', 'Universidad Nacional Agraria la Molina');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('44', 'cristhiansalazar@unat.edu.pe', 'SALAZAR VELASQUEZ', 'CRISTHIAN', 'DNI', '46240976', '988001062', 'Público', 'Universidad Nacional Autónoma de Tayacaja “Daniel Hernández Morillo”');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('45', 'malbans@unp.edu.pe', 'ALBÁN SUÁREZ', 'MARÍA GETRUDIS', 'DNI', '2631510', '968846694', 'Público', 'Universidad Nacional de Piura');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('46', 'bchilon@ucv.edu.pe', 'CHILON ROJAS', 'BELEN PAHOLA', 'DNI', '46071935', '995360756', 'Privado', 'Universidad César Vallejo');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('47', 'gvalencia@unamad.edu.pe', 'VALENCIA PARI ', 'GRISELDA YENI ', 'DNI', '46752003', '931713246', 'Público', 'Universidad Nacional Amazónica de Madre de Dios');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('48', 'korimiranda1@gmail.com', 'MIRANDA FLORES DE HUAMANCAYO ', 'ANALI', 'DNI', '60594856', '933347109', 'Público', 'Universidad Nacional Amazónica de Madre de Dios');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('49', 'mmesia@utea.edu.pe', 'MESIA NOMBERTO', 'MIRTHA ELIANA', 'DNI', '25573490', '980482813', 'Privado', 'Universidad Tecnológica de los Andes');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('50', 'aamado@ucsm.edu.pe', 'AMADO MENDOZA', 'ANA MARÍA', 'DNI', '29663122', '959554705', 'Privado', 'Universidad Católica de Santa María');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('51', 'mpalaciosc@ucv.edu.pe', 'PALACIOS CRUZ  ', 'MARILUZ ROCÍO', 'DNI', '2767110', '969522311', 'Privado', 'Universidad César Vallejo');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('52', 'ipizarro@usat.edu.pe', 'PIZARRO CASTRO', 'ISIS BRUNELLA', 'DNI', '71850818', '951655908', 'Privado', 'Universidad Católica Santo Toribio de Mogrovejo');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('53', 'vmvm900@unsm.edu.pe', 'VALLEJOS MONJA ', 'VICTOR MANUEL', 'DNI', '42183659', '953647471', 'Público', 'Universidad Nacional de San Martín');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('54', 'rrodriguezr@ucv.edu.pe', 'RODRIGUEZ RAVELO', 'ROGER ALBERTO', 'DNI', '18138507', '949787842', 'Privado', 'Universidad César Vallejo');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('55', 'yquintana@unajma.edu.pe', 'QUINTANA', 'NAVIO', 'DNI', '46817637', '998900071', 'Público', 'Universidad Nacional José María Arguedas');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('56', 'acreditacionogc@unajma.edu.pe', 'ENCISO CHOQUETICO', 'ALEXANDRA ROXANA', 'DNI', '73371684', '953272347', 'Público', 'Universidad Nacional José María Arguedas');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('57', 'iveilz@pucp.pe', 'VELIZ ALVAREZ', 'ISABEL ROXANA', 'DNI', '9855748', '993059401', 'Privado', 'Pontificia Universidad Católica del Perú');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('58', 'dvillasantep@utea.edu.pe', 'VILLASANTE PAZ', 'DUSAN', 'DNI', '80035604', '984261776', 'Privado', 'Universidad Tecnológica de los Andes');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('59', 'michael.alcazar@unica.edu.pe', 'ALCÁZAR HUARCAYA ', 'MICHAEL VLADIMIR ', 'DNI', '21459418', '956657170', 'Público', 'Universidad Nacional San Luis Gonzaga');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('60', 'maria.ecos@unica.edu.pe', 'ECOS MENDIZ', 'MARIA ELENA', 'DNI', '45204031', '961513135', 'Público', 'Universidad Nacional San Luis Gonzaga');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('61', 'mhuerta@uns.edu.pe', 'HUERTA FLORES', 'MARIA MAGDALENA', 'DNI', '32929994', '943570358', 'Público', 'Universidad Nacional del Santa');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('62', 'edudiazgo823@gmail.com', 'DIAZ GONZALES', 'EUDUALDO', 'DNI', '27740611', '945169768', 'Público', 'Universidad Nacional de Jaén');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('63', 'harsisa@virtual.upt.pe', 'SISA YATACO', 'HAYDEE RAQUEL', 'DNI', '42703088', '964747443', 'Privado', 'Universidad Privada de Tacna');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('64', 'ccnavarro@ucss.edu.pe', 'NAVARRO MONTEAGUDO', 'CARMEN CECILIA', 'DNI', '7517476', '927728176', 'Privado', 'Universidad Católica Sedes Sapientiae');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('65', 'giovana.serna@uniq.edu.pe', 'SERNA SILVA ', 'GIOVANNA JACKELINE ', 'DNI', '23839855', '965909019', 'Público', 'Universidad Nacional Intercultural de Quillabamba');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('66', 'fperezv@utea.edu.pe', 'PEREZ VILLCA', 'FRESHIA BERYOSKA', 'DNI', '70570922', '970638240', 'Privado', 'Universidad Tecnológica de los Andes');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('67', 'jlijarza@ucss.edu.pe', 'LIJARZA OLIVERA', 'JAVIER', 'DNI', '41837794', '902311169', 'Privado', 'Universidad Católica Sedes Sapientiae');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('68', 'renatto.motta@uniq.edu.pe', 'MOTTA ZEVALLOS', 'RENATTO NICOLINO', 'DNI', '23962394', '996663606', 'Público', 'Universidad Nacional Intercultural de Quillabamba');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('69', 'icusi@uniq.edu.pe', 'CUSI OLMEDA', 'ILIANA FANNY', 'DNI', '43975806', '976333768', 'Público', 'Universidad Nacional Intercultural de Quillabamba');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('70', 'vmaleman@unap.edu.pe', 'ALEMÁN PALOMINO ', 'VÍCTOR MARTÍN ', 'DNI', '1325050', '951715510', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('71', 'ralcos@unap.edu.pe', 'ALCOS CHURA', 'REYNALDO', 'DNI', '1308350', '951881488', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('72', 'bruiz@unap.edu.pe', 'RUIZ TAPIA', 'BIBIANA', 'DNI', '1201353', '951129428', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('73', 'jmartinez@unap.edu.pe', 'MARTINEZ FRANCO', 'JUAN DANIEL ', 'DNI', '1305887', '951600411', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('74', 'lcahuanam@unap.edu.pe', 'CAHUANA MEDRANO ', 'LISBETH DEIDA ', 'DNI', '40706874', '965136600', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('75', 'lcharaja@unap.edu.pe', 'CHARAJA FERNANDEZ ', 'LITZBEL ', 'DNI', '40517509', '951523343', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('76', 'jarcaya@unap.edu.pe', 'ARCAYA COYURI', 'JUAN GUILLERMO', 'DNI', '1333215', '951778418', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('77', 'mzcalizaya@unap.edu.pe', 'CALIZAYA LUQUE', 'MAGLY ZELMIRA ROSARIO', 'DNI', '1340071', '980400776', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('78', 'vmariaca@unap.edu.pe', 'MARIACA CANAZA', 'VIANNEY MARIELA ', 'DNI', '40183370', '951883986', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('79', 'mromani@unap.edu.pe', 'ROMANI ALEJO', 'MARCO FÉLIX ', 'DNI', '40294304', '930984575', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('80', 'delbyn.agr@gmail.com', 'GUITERAS RUIZ', 'DELBYN ANDREE', 'DNI', '70869564', '965796543', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('81', 'mvaler@unap.edu.pe', 'VALER HACHA', 'MARTHA BEATRIZ', 'DNI', '24884423', '951846337', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('82', 'mihailagente19@gmail.com', 'GUITERAS RUIZ', 'MIHAIL ANGEL', 'DNI', '70869565', '946626965', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('83', 'leonardo.corahua@unsaac.edu.pe', 'CORAHUA SALCEDO', 'LEONARDO', 'DNI', '23962857', '9360057', 'Público', 'Universidad Nacional San Antonio Abad del Cusco');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('84', 'uballadares@uandina.edu.pe', 'BALLADARES APARICIO', 'URIEL', 'DNI', '23810531', NULL, 'Privado', 'Universidad Andina del Cusco');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('85', 'ycastro@uandina.edu.pe', 'CASTRO VARGAS', 'YANET', 'DNI', '23955308', NULL, 'Privado', 'Universidad Andina del Cusco');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('86', 'cganvini@uandina.edu.pe', 'GANVINI VALCARCEL', 'CRISTHIAN EDUARDO ', 'DNI', '23920560', NULL, 'Privado', 'Universidad Andina del Cusco');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('87', 'afloresc@uandina.edu.pe', 'FLORES CONTRERAS', 'AYDEE ', 'DNI', '23818613', NULL, 'Privado', 'Universidad Andina del Cusco');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('88', 'rmarino@uandina.edu.pe', 'MARIÑO LOAIZA', 'RUBÉN TITO', 'DNI', '23886954', NULL, 'Privado', 'Universidad Andina del Cusco');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('89', 'gticona@unap.edu.pe', 'TICONATITO', 'GRACIELA VICTORIA', 'DNI', '29339114', '953768455', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('90', 'claudiavillegas@unap.edu.pe', 'VILLEGAS ABRILL', 'CLAUDIA BEATRIZ', 'DNI', '29617161', '956782811', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('91', 'jbegazo@unap.edu.pe', 'BEGAZO MIRANDA', 'JOSÉ OSCAR ALBERTO', 'DNI', '1343700', '951525605', 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('92', 'garridozadith@gmail.com', 'GARRIDO CAMPAÑA', 'ZADITH NANCY ', 'DNI', '43235341', '937643721', 'Público', 'Universidad Nacional de Jaén');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('93', NULL, 'BARRAGANB CONDORI', 'MELQUIADEZ', 'DNI', '23979306', NULL, 'Público', 'Universidad Nacional Intercultural de Quillabamba');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('94', NULL, 'LEON LEGUIA', 'CRISTINA', 'DNI', '45453134', NULL, 'Público', 'Universidad Nacional José María Arguedas');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('95', 'luisgarcia@unsm.edu.pe ', 'GARCIA VELA ', 'LUIS RAFAEL', 'DNI', '41607912', '959419388', 'Público', 'Universidad Nacional de San Martín');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('96', 'magalvez@unsm.edu.pe ', 'GALVEZ DÍAZ ', 'MARCO ARMANDO', 'DNI', '1080605', '942818980', 'Público', 'Universidad Nacional de San Martín');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('97', 'dencomenderos@unsm.edu.pe ', 'ENCOMENDEROS DÁVALOS', 'DANNY OLDY', 'DNI', '18092156', '953625028', 'Público', 'Universidad Nacional de San Martín');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('98', 'herlinda.calderon@unsch.edu.pe', 'CALDERON GONZALES', 'HERLINDA', 'DNI', '28203800', '995208673', 'Público', 'Universidad Nacional de San Cristóbal de Huamanga');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('99', 'da.agronomiatropical@uniq.edu.pe', 'CESPEDES DEL POZO', 'WILTON HENRY', 'DNI', '23853004', NULL, 'Público', 'Universidad Nacional Intercultural de Quillabamba');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('100', 'lmelgarp@utea.edu.pe', 'MELGAR PACHECO', 'IRIS', 'DNI', '9706265', '983600519', 'Privado', 'Universidad Tecnológica de los Andes');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('101', 'mntapia@unap.edu.pe', 'TAPIA INFANTES', 'MARTHA NANCY', 'DNI', NULL, NULL, 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('102', NULL, 'PORTOCARRERO PRADO', 'HARNOLD SEGUNDO', 'DNI', NULL, NULL, 'Público', 'Universidad Nacional del Altiplano');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('103', 'rdelacuz@uncp.edu.pe', 'DE LA CRUZ MISARI', 'ROCÍO GLORIA', 'DNI', '19817114', '961931908', 'Público', 'Universidad Nacional del Centro del Perú');
INSERT INTO asistencia (id, email, apellidos, nombres, tipoDoc, nroDoc, telefono, tipo, universidad) VALUES ('104', 'wsancarrancoc@unp.edu.pe', 'SANCARRANCO CÓRDOVA', 'WILSON GERÓNIMO', 'DNI', '2621831', '968826414', 'Público', 'Universidad Nacional de Piura');
