Inca odata. Tu ai incurcat. Functia attr_caem este in fisierul M2 nu in M1

Iti prezint informztie suplimentara.  
Analizeaza fisierile. 
Iti prezint codul sursa la 2 rapoarte in Drupal - Codul Outer HTML
Fisierul cap1_outer este din raportul m2. Raportul M2 cand se creaaza se selecteaza nu mai CAP1_RCAEM_C2 adica nu mai coloana 2.
Fisierul Cap1_outer_m1 este din raportul m1. Rapoartul M1 cand se creaza se selecteaza de la  CAP1_CAEM_C2 - pana la CAP1_CAEM_C12 
Dupa informatia prezentata poti sa spui de ce la M1 se selecteaza  toate coloanele CAP1_CAEM_C2 - pana la CAP1_CAEM_C12


Ce declanseaza selectarea implicita a  CAP1_CAEM_C2 - pana la CAP1_CAEM_C12 in m1 de ce in m2 se selecteaza implicit nu mai CAP1_CAEM_C2 ?
Ce diferente sunt in cod ? 


Informatie suplimentara 


M2 (
name	title	xpath	grid_name	parent_grid_name	type	widget	container	format	ignore_empty	ignore_autocalc_check	export_result	force_def_val	disabled	readonly	required	weight	allow_cyrillic	default_value	options	attributes	class	rows	minlength	maxlength	decimal_length	pattern	exclude_from_xml	extensions	max_size	tag
ENT_NAME	Denumirea completa a contribuabilului	dec/DataSet/Header/ENT_NAME			text	textfield			0	0	0	0	0	0	0	0	0	@agent_name			text	0	0	0	0		0			
FISCCOD_FISC	Inspectoratul Fiscal de Stat pe r-nul (mun.)	dec/DataSet/Header/FISCCOD_FISC			custom	select	%02d	%02d	0	0	0	0	0	0	1	1	0	@ifs	<?php return classifiers_get_list('ifs'); ?>		text	0	2	2	0		0			
CUATM	Codul localităţii (CUATM)	dec/DataSet/Header/CUATM			custom	select	%04d	%04d	0	0	0	0	0	0	1	2	0	@cuatm	<?php return classifiers_get_list('cuatm'); ?>		text	0	4	4	0		0			
STREET	Strada	dec/DataSet/Header/STREET			text	textfield			0	0	0	0	0	0	0	3	0	@address			text	0	0	100	0		0			
STREET_NR	Numărul casei	dec/DataSet/Header/STREET_NR			text	textfield			0	0	0	0	0	0	0	4	0				text	0	0	100	0		0			
CAEM	Activitatea principală	dec/DataSet/Header/CAEM			text	select2			0	0	0	0	0	0	1	5	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		caem Section-caem	0	0	300	0		0			
CUIIO	Codul CUIÎO	dec/DataSet/Header/CUIIO			text	textfield			0	0	0	0	0	0	1	6	0	@cuiio			text	0	5	8	0		0			
IDNO	Codul fiscal	dec/DataSet/Header/IDNO			text	textfield			0	0	0	0	0	0	1	7	0	@fisccode			text	0	0	15	0		0			
HEAD	Conducătorul	dec/DataSet/Header/HEAD			text	textfield		textfield	0	0	0	0	0	0	0	8	0				text	0	0	0	0		0			
EXECUTOR	Executant	dec/DataSet/Header/EXECUTOR			text	textfield			0	0	0	0	0	0	0	9	0	@full_name			text	0	0	0	0		0			
PHONE	Număr de telefon	dec/DataSet/Header/PHONE			text	textfield			0	0	0	0	0	0	0	10	0	@cuiio_telefon			text	0	0	12	0		0			
EMAIL	E-mail	dec/DataSet/Header/EMAIL			text	textfield			0	0	0	0	0	0	0	11	0	@email			text	0	0	60	0		0			
nalogPeriodType	Perioada fiscală	dec/DataSet/Header/nalogPeriodType			period	hidden			0	0	0	0	0	0	1	12	0	@last_quarter_period			text	0	0	0	0		0			
nalogPeriodLetter	Perioada fiscală	dec/DataSet/Header/nalogPeriodLetter			period_type	hidden			0	0	0	0	0	0	0	13	0	T			text	0	0	0	0		0			
TRIM	Trimestrul de raportare	dec/DataSet/Header/TRIM			period_quarter	select			0	0	0	0	0	0	1	14	0	@last_quarter_period			number	0	0	0	0		0			
YEAR	Anul de raportare	dec/DataSet/Header/YEAR			period_year	select			0	0	0	0	0	0	1	15	0	@last_year_period			number	0	0	0	0		0			
CAP1_CAEM_C2	Genul de activitate din coloana 2	dec/DataSet/Data/CAP1_CAEM_C2			text	select2			0	0	0	0	0	0	1	16	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		caem Section2-caem	0	0	30	0		0			
CAP1_CAEM_C3	Genul de activitate din coloana 3	dec/DataSet/Data/CAP1_CAEM_C3			text	select2			0	0	0	0	0	0	0	17	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C4	Genul de activitate din coloana 4	dec/DataSet/Data/CAP1_CAEM_C4			text	select2			0	0	0	0	0	0	0	18	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C5	Genul de activitate din coloana 5	dec/DataSet/Data/CAP1_CAEM_C5			text	select2			0	0	0	0	0	0	0	19	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C6	Genul de activitate din coloana 6	dec/DataSet/Data/CAP1_CAEM_C6			text	select2			0	0	0	0	0	0	0	20	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C7	Genul de activitate din coloana 7	dec/DataSet/Data/CAP1_CAEM_C7			text	select2			0	0	0	0	0	0	0	21	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C8	Genul de activitate din coloana 8	dec/DataSet/Data/CAP1_CAEM_C8			text	select2			0	0	0	0	0	0	0	22	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C9	Genul de activitate din coloana 9	dec/DataSet/Data/CAP1_CAEM_C9			text	select2			0	0	0	0	0	0	0	23	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C10	Genul de activitate din coloana 10	dec/DataSet/Data/CAP1_CAEM_C10			text	select2			0	0	0	0	0	0	0	24	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C11	Genul de activitate din coloana 11	dec/DataSet/Data/CAP1_CAEM_C11			text	select2			0	0	0	0	0	0	0	25	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C12	Genul de activitate din coloana 12	dec/DataSet/Data/CAP1_CAEM_C12			text	select2			0	0	0	0	0	0	0	26	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			

)


M1

(
name	title	xpath	grid_name	parent_grid_name	type	widget	container	format	ignore_empty	ignore_autocalc_check	export_result	force_def_val	disabled	readonly	required	weight	allow_cyrillic	default_value	options	attributes	class	rows	minlength	maxlength	decimal_length	pattern	exclude_from_xml	extensions	max_size	tag
ENT_NAME	Denumirea completa a contribuabilului	dec/DataSet/Header/ENT_NAME			text	textfield			0	0	0	0	0	0	0	0	0	@agent_name			text	0	0	0	0		0			
FISCCOD_FISC	Inspectoratul Fiscal de Stat pe r-nul (mun.)	dec/DataSet/Header/FISCCOD_FISC			custom	select	%02d	%02d	0	0	0	0	0	0	1	1	0	@ifs	<?php return classifiers_get_list('ifs'); ?>		text	0	2	2	0		0			
CUATM	Codul localităţii (CUATM)	dec/DataSet/Header/CUATM			custom	select	%04d	%04d	0	0	0	0	0	0	1	2	0	@cuatm	<?php return classifiers_get_list('cuatm'); ?>		text	0	4	4	0		0			
STREET	Strada	dec/DataSet/Header/STREET			text	textfield			0	0	0	0	0	0	0	3	0	@address			text	0	0	100	0		0			
STREET_NR	Numărul casei	dec/DataSet/Header/STREET_NR			text	textfield			0	0	0	0	0	0	0	4	0				text	0	0	100	0		0			
CAEM	Activitatea principală	dec/DataSet/Header/CAEM			text	select2			0	0	0	0	0	0	1	5	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		caem Section-caem	0	0	300	0		0			
CUIIO	Codul CUIÎO	dec/DataSet/Header/CUIIO			text	textfield			0	0	0	0	0	0	1	6	0	@cuiio			text	0	5	8	0		0			
IDNO	Codul fiscal	dec/DataSet/Header/IDNO			text	textfield			0	0	0	0	0	0	1	7	0	@fisccode			text	0	0	15	0		0			
HEAD	Conducătorul	dec/DataSet/Header/HEAD			text	textfield		textfield	0	0	0	0	0	0	0	8	0				text	0	0	0	0		0			
EXECUTOR	Executant	dec/DataSet/Header/EXECUTOR			text	textfield			0	0	0	0	0	0	0	9	0	@full_name			text	0	0	0	0		0			
PHONE	Număr de telefon	dec/DataSet/Header/PHONE			text	textfield			0	0	0	0	0	0	0	10	0	@cuiio_telefon			text	0	0	12	0		0			
EMAIL	E-mail	dec/DataSet/Header/EMAIL			text	textfield			0	0	0	0	0	0	0	11	0	@email			text	0	0	60	0		0			
nalogPeriodType	Perioada fiscală	dec/DataSet/Header/nalogPeriodType			period	hidden			0	0	0	0	0	0	1	12	0	@last_quarter_period			text	0	0	0	0		0			
nalogPeriodLetter	Perioada fiscală	dec/DataSet/Header/nalogPeriodLetter			period_type	hidden			0	0	0	0	0	0	0	13	0	T			text	0	0	0	0		0			
TRIM	Trimestrul de raportare	dec/DataSet/Header/TRIM			period_quarter	select			0	0	0	0	0	0	1	14	0	@last_quarter_period			number	0	0	0	0		0			
YEAR	Anul de raportare	dec/DataSet/Header/YEAR			period_year	select			0	0	0	0	0	0	1	15	0	@last_year_period			number	0	0	0	0		0			
CAP1_CAEM_C2	Genul de activitate din coloana 2	dec/DataSet/Data/CAP1_CAEM_C2			text	select2			0	0	0	0	0	0	1	16	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		caem Section2-caem	0	0	30	0		0			
CAP1_CAEM_C3	Genul de activitate din coloana 3	dec/DataSet/Data/CAP1_CAEM_C3			text	select2			0	0	0	0	0	0	0	17	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C4	Genul de activitate din coloana 4	dec/DataSet/Data/CAP1_CAEM_C4			text	select2			0	0	0	0	0	0	0	18	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C5	Genul de activitate din coloana 5	dec/DataSet/Data/CAP1_CAEM_C5			text	select2			0	0	0	0	0	0	0	19	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C6	Genul de activitate din coloana 6	dec/DataSet/Data/CAP1_CAEM_C6			text	select2			0	0	0	0	0	0	0	20	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C7	Genul de activitate din coloana 7	dec/DataSet/Data/CAP1_CAEM_C7			text	select2			0	0	0	0	0	0	0	21	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C8	Genul de activitate din coloana 8	dec/DataSet/Data/CAP1_CAEM_C8			text	select2			0	0	0	0	0	0	0	22	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C9	Genul de activitate din coloana 9	dec/DataSet/Data/CAP1_CAEM_C9			text	select2			0	0	0	0	0	0	0	23	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C10	Genul de activitate din coloana 10	dec/DataSet/Data/CAP1_CAEM_C10			text	select2			0	0	0	0	0	0	0	24	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C11	Genul de activitate din coloana 11	dec/DataSet/Data/CAP1_CAEM_C11			text	select2			0	0	0	0	0	0	0	25	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			
CAP1_CAEM_C12	Genul de activitate din coloana 12	dec/DataSet/Data/CAP1_CAEM_C12			text	select2			0	0	0	0	0	0	0	26	0	@cuiio_caem_code	<?php return declarations_get_caem_list('vocabulary_18'); ?>		text	0	0	30	0		0			

)