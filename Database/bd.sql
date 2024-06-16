USE railway;

CREATE TABLE asistencia(    
	CodigoCIP	INT,
    TipoDoc	VARCHAR(512),
    DocIdentidad	INT,
    Nombres	VARCHAR(512),
    Capitulo	VARCHAR(512),
    Asociacion	VARCHAR(512),
    Inscrito	VARCHAR(512),
    Sede	VARCHAR(512),
    Ticket	VARCHAR(512),
    Asistio	VARCHAR(512),
    HoraAsistencia	VARCHAR(512),
    FechaAsistencia	VARCHAR(512)
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

INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('57191', 'DNI', '00435194', 'PALOMINO QUISPE FACUNDO', 'ELECTRONICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('53309', 'DNI', '00472405', 'PALACIOS PERCA ADOLFO CESAR', 'AGRONOMICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('106496', 'DNI', '00511224', 'VILLALVA SAGUA JUVENAL', 'QUIMICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('99433', 'DNI', '00516844', 'LUPACA PALOMINO DENNIS', 'MINAS', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('85638', 'DNI', '01206298', 'CURO CONDORI INOCENCIO', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('55471', 'DNI', '01212794', 'MELO TITO CLODOALDO', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('22224', 'DNI', '01234776', 'GONZALES MUÑIZ GINO ROBERTO', 'AGRONOMICA', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('195436', 'CARNET DE EXTRANJERÍA', '001245398', 'BRUNAUX ------------ ALEXIS PAUL PATRICE', 'METALURGICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('811', 'DNI', '01247025', 'YANA TICONA JULIO AURELIANO', 'CIVIL', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('241044', 'DNI', '01287034', 'BERMEJO  COLQUE NICOLAS WILBERTO ', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('325418', 'DNI', '01307247', 'ILASACA CAHUATA HEDDY FLAVIO', 'ELECTRICA', 'ORDINARIO', 'OK', 'Cusco', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('335389', 'DNI', '01311815', 'QUISPE MAMANI SILVINO ALEJO', 'QUIMICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('74911', 'DNI', '01315178', 'LUNA FLORES KENNETH AURELIO', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('89861', 'DNI', '01315715', 'HUARACHI GOMEZ NAZARIO', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('93193', 'DNI', '01320661', 'ZANABRIA GOMEZ CARLOS ERNESTO', 'ELECTRICA', 'ORDINARIO', 'OK', 'Cusco', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('166142', 'DNI', '01326667', 'SALAS GARCIA HENRY CESAR', 'QUIMICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('97861', 'DNI', '01332499', 'COLQUE MAMANCHURA TOMAS', 'AGRONOMICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('35363', 'DNI', '01333288', 'ROMERO PEÑA LECSI MARICELA', 'QUIMICA', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('85847', 'DNI', '01333608', 'COAQUIRA CASTILLO ROGER JESUS', 'ELECTRONICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('41584', 'DNI', '01341519', 'CASTRO FLORES MAXIMO', 'GEOLOGICA', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('60235', 'DNI', '01343477', 'BERRIOS BALCONA MANUEL JESUS', 'ELECTRICA', 'ORDINARIO', 'OK', 'Cusco', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('53069', 'DNI', '01484166', 'MAYTA URURI RODOLFO ELEUTERIO', 'GEOLOGICA', 'ORDINARIO', 'OK', 'Cusco', '205', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('170110', 'DNI', '01508951', 'MAYTA QUISPE MARIO ARMANDO', 'ZOOTECNIA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('59064', 'DNI', '01544483', 'MAYTA URURI ROLANDO', 'GEOLOGICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('62943', 'DNI', '01556853', 'FUENTES MACEDO OSWALDO', 'QUIMICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('168469', 'DNI', '01560229', 'LEON HANCCO EDHY TEODORO', 'AGROINDUSTRIAL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('63278', 'DNI', '01700716', 'ARAGON SUMAR PAVEL FLORENCIO', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('41043', 'DNI', '01854472', 'MAMANI MACHACA JESUS PELAYO', 'GEOLOGICA', 'VITALICIO', 'OK', 'Cusco', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('51973', 'DNI', '01855544', 'CUSACANI PANTY ISAÍAS', 'GEOLOGICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('87113', 'DNI', '02038699', 'VARGAS MAMANI HUGO JAVIER', 'CIVIL', 'ORDINARIO', 'OK', 'Cusco', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('98508', 'DNI', '02040513', 'BIZARRO FLORES WALTER OSCAR', 'QUIMICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('124947', 'DNI', '02046829', 'MAMANI PARICAHUA FROILAN', 'INDUSTRIAL', 'ORDINARIO', 'OK', 'Cusco', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('314542', 'DNI', '02171889', 'QUISPE CCUNO LIDUVINA AUGUSTA', 'AGRONOMICA', 'ORDINARIO', 'OK', 'Cusco', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('83269', 'DNI', '02174085', 'CASTILLO QUISPE NOLBERTO', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('23926', 'DNI', '02260850', 'TTITO LEON SALOMON', 'QUIMICA', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('16855', 'DNI', '02266346', 'PUMA HUAYAPA EDDIE SALOMON', 'CIVIL', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('31575', 'DNI', '02286055', 'CORNEJO GALLEGOS PEDRO MIGUEL ANGEL', 'CIVIL', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('51569', 'DNI', '02290407', 'ARIZACA ANCCASI VALENTIN YRUMUN', 'AGRONOMICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('106541', 'DNI', '02292750', 'MAMANI SONCCO MAURO', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('32633', 'DNI', '02293026', 'URRUTIA MENDOZA JOSE LUIS', 'QUIMICA', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('14008', 'DNI', '02297199', 'PANCORBO CUNO JOSE HERMOGENES', 'AGRONOMICA', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('81805', 'DNI', '02302947', 'IRURI ANTEZANA PRISCO ALCIDES', 'ZOOTECNIA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('128553', 'DNI', '02363124', 'PAUCAR PAUCAR HUGO RAUL', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('128564', 'DNI', '02364097', 'SANTANDER MAMANI VIDAL OLIVE', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('76273', 'DNI', '02364846', 'SOLORZANO FRISANCHO EFRAIN FLORENTINO', 'CIVIL', 'ORDINARIO', 'OK', 'Canchis - Sicuani', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('20979', 'DNI', '02387936', 'HUAMAN HUALLPA MARIO JESUS', 'AGRONOMICA', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('88790', 'DNI', '02417836', 'RAMOS MORA JOSE LUIS', 'CIVIL', 'ORDINARIO', 'OK', 'Cusco', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('84236', 'DNI', '02425349', 'CHIPANA VILCA WILSON PEDRO', 'QUIMICA', 'ORDINARIO', 'OK', 'Cusco', '112', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('96174', 'DNI', '02434410', 'WILCHEZ VENEGAS REYNAN', 'CIVIL', 'ORDINARIO', 'OK', 'Cusco', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('152086', 'DNI', '02439647', 'MAMANI MAMANI JUANA', 'QUIMICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('108705', 'DNI', '02443423', 'COAQUIRA COAQUIRA WILBER', 'ELECTRICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('88786', 'DNI', '02446250', 'BENAVENTE ROMERO CARLOS EDY FRANCISCO', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('303534', 'CARNET DE EXTRANJERÍA', '002451253', 'ORTEGA GARCIA MARIA EUGENIA', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('303550', 'CARNET DE EXTRANJERÍA', '002759480', 'SANTANA CHUQUIZUTA TATIANE', 'CIVIL', 'ORDINARIO', 'OK', 'La Convención - Quillabamba', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('16415', 'DNI', '02890025', 'UMERES CACERES RENATO FELIPE', 'GEOLOGICA', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('170115', 'DNI', '04071320', 'ROJAS NINA HIPOLITO CEFERINO', 'ZOOTECNIA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('63284', 'DNI', '04086288', 'TERREROS POMPILLA AURELIO ORLANDO', 'MINAS', 'ORDINARIO', 'OK', 'Cusco', '329', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('84925', 'DNI', '04439800', 'ROJAS FLOR CHRISTIAN GERARDO', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('6356', 'DNI', '04632368', 'CASTILLO FLOREZ NICANOR GABINO', 'AGRONOMICA', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('15977', 'DNI', '04640048', 'VENERO PACHECO EVA ROSARIO', 'QUIMICA', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('21097', 'DNI', '04648953', 'NORIEGA ZAMALLOA CARLOS FRANCISCO', 'QUIMICA', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('83601', 'DNI', '04815011', 'HUANCA AMPUERO VICENTE MARINO', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('294373', 'DNI', '04825233', 'OJEDA FARFAN WILLIAM ADAMIR', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('95429', 'DNI', '04827196', 'QUISPE PIZARRO RONY', 'ZOOTECNIA', 'ORDINARIO', 'OK', 'Cusco', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('48378', 'DNI', '04828545', 'MELLADO VARGAS DARWIN', 'ELECTRICA', 'ORDINARIO', 'OK', 'Cusco', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('13687', 'DNI', '04828750', 'BELLOTA GARATE ALEJANDRO', 'CIVIL', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('46429', 'DNI', '04828873', 'ALARCON NAVARRO VICTOR DARIO', 'ELECTRICA', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('64693', 'DNI', '04828940', 'DONGO ALCAZAR BRUMEL ALBERTO', 'MINAS', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('154433', 'DNI', '04960761', 'YAÑE ZUÑIGA LUCAS', 'CIVIL', 'ORDINARIO', 'OK', 'Cusco', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('10107', 'DNI', '05070869', 'PAUCAR BERMUDEZ SALVADOR MOISES', 'CIVIL', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('34573', 'DNI', '05071660', 'MAMANI TTITO VIDAL AMERICO', 'CIVIL', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('501', 'CARNET DE EXTRANJERÍA', '5074602', 'SAMANEZ RICHTER MIGUEL IGNACIO', 'AGRONOMICA', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('311775', 'DNI', '05400888', 'AVILES QUISPE LUCIANO', 'ELECTRICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('37675', 'DNI', '06004773', 'ALLAUCA SIERRA RAUL', 'MECANICA', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('12940', 'DNI', '06049444', 'PORTILLA SALAS PEDRO HERNAN', 'AGRONOMICA', 'VITALICIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('77506', 'DNI', '06289097', 'MOLINA GONZALES LUIS JAVIER', 'MECANICA', 'ORDINARIO', 'OK', 'Cusco', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('87755', 'DNI', '06290172', 'CASTILLO DELGADO LUTHER ANTONIO', 'AGRONOMICA', 'ORDINARIO', '', '', '', '', '', '');
INSERT INTO asistencia (CodigoCIP, TipoDoc, DocIdentidad, Nombres, Capitulo, Asociacion, Inscrito, Sede, Ticket, Asistio, HoraAsistencia, FechaAsistencia) VALUES ('84202', 'DNI', '06291636', 'CAMPANA CRUZ BORIS', 'CIVIL', 'ORDINARIO', '', '', '', '', '', '');