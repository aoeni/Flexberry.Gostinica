



CREATE TABLE "ОбязСотр"
(

	"primaryKey" RAW(16) NOT NULL,

	"РегНомер" NVARCHAR2(255) NULL,

	"Место" NVARCHAR2(255) NULL,

	"Дата" DATE NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Гостиница" RAW(16) NOT NULL,

	"Персонал" RAW(16) NOT NULL,

	"ТЧОбязСотр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧОбязСотр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Обязанности" NVARCHAR2(255) NULL,

	"ДатаСост" DATE NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Гостиница"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"ОПФ" NVARCHAR2(255) NULL,

	"ОКПО" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Персонал"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Телефон" NVARCHAR2(255) NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"ШтатЕдиницы" FLOAT(126) NULL,

	"Оклад" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ШтатРаспис"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Номер" NUMBER(10) NULL,

	"Период" DATE NULL,

	"Гостиница" RAW(16) NOT NULL,

	"ТЧШтатРасп" RAW(16) NOT NULL,

	"Персонал" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧШтатРасп"
(

	"primaryKey" RAW(16) NOT NULL,

	"Надбавки" FLOAT(126) NULL,

	"Всего" FLOAT(126) NULL,

	"Дата" DATE NULL,

	"Персонал" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ОбязСотр"
	ADD CONSTRAINT "ОбязСотр_FГос_4567" FOREIGN KEY ("Гостиница") REFERENCES "Гостиница" ("primaryKey");

CREATE INDEX "ОбязСотр_IГос_4956" on "ОбязСотр" ("Гостиница");

ALTER TABLE "ОбязСотр"
	ADD CONSTRAINT "ОбязСотр_FПер_4959" FOREIGN KEY ("Персонал") REFERENCES "Персонал" ("primaryKey");

CREATE INDEX "ОбязСотр_IПер_5866" on "ОбязСотр" ("Персонал");

ALTER TABLE "ОбязСотр"
	ADD CONSTRAINT "ОбязСотр_FТЧО_8758" FOREIGN KEY ("ТЧОбязСотр") REFERENCES "ТЧОбязСотр" ("primaryKey");

CREATE INDEX "ОбязСотр_IТЧО_9724" on "ОбязСотр" ("ТЧОбязСотр");

ALTER TABLE "ТЧОбязСотр"
	ADD CONSTRAINT "ТЧОбязСотр_FД_9242" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "ТЧОбязСотр_IД_5616" on "ТЧОбязСотр" ("Должности");

ALTER TABLE "Персонал"
	ADD CONSTRAINT "Персонал_FДол_5854" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Персонал_IДол_1959" on "Персонал" ("Должности");

ALTER TABLE "ШтатРаспис"
	ADD CONSTRAINT "ШтатРаспис_FГ_4515" FOREIGN KEY ("Гостиница") REFERENCES "Гостиница" ("primaryKey");

CREATE INDEX "ШтатРаспис_IГ_8716" on "ШтатРаспис" ("Гостиница");

ALTER TABLE "ШтатРаспис"
	ADD CONSTRAINT "ШтатРаспис_FТ_9030" FOREIGN KEY ("ТЧШтатРасп") REFERENCES "ТЧШтатРасп" ("primaryKey");

CREATE INDEX "ШтатРаспис_IТ_7761" on "ШтатРаспис" ("ТЧШтатРасп");

ALTER TABLE "ШтатРаспис"
	ADD CONSTRAINT "ШтатРаспис_FП_3922" FOREIGN KEY ("Персонал") REFERENCES "Персонал" ("primaryKey");

CREATE INDEX "ШтатРаспис_IП_7721" on "ШтатРаспис" ("Персонал");

ALTER TABLE "ТЧШтатРасп"
	ADD CONSTRAINT "ТЧШтатРасп_FП_1437" FOREIGN KEY ("Персонал") REFERENCES "Персонал" ("primaryKey");

CREATE INDEX "ТЧШтатРасп_IП_2661" on "ТЧШтатРасп" ("Персонал");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


