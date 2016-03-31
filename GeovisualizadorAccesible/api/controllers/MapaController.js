module.exports = {

    index: function (req, res) {
        var estilo = (req.cookies.estilo) ? req.cookies.estilo : 'estilo.css';
        var tamanioLetra = (req.cookies.tamanioletra) ? req.cookies.tamanioletra : 1;

        var espaciadoLetra = (req.cookies.espaciadoletra) ? req.cookies.espaciadoletra : 1;

        var saturacion = (req.cookies.saturate) ? req.cookies.saturate : 1;

        var contraste = (req.cookies.contraste) ? req.cookies.contraste : 1;
        var brillo = (req.cookies.brillo) ? req.cookies.brillo : 1;
        var opacidad = (req.cookies.opacidad) ? req.cookies.opacidad : 1;
        var invertido = (req.cookies.invertido) ? req.cookies.invertido : 0;
        var tono = (req.cookies.tono) ? req.cookies.tono : 0;
        var sepia = (req.cookies.sepia) ? req.cookies.sepia : 0;
        var grises = (req.cookies.grises) ? req.cookies.grises : 0;
        var mapapatron = (req.cookies.mapapatron) ? req.cookies.mapapatron : 'original';



        return res.redirect('/Mapa/main');
    },

    main: function (req, res) {
        res.view();
    },

    provincias: function (req, res) {
        var menuIdProvincia = req.param("id");
        var idProvinciaSvg = menuIdProvincia;
        var tituloProvincia = "";
        var descripcionProvincia = "";

        switch (menuIdProvincia) {
        case '7':
            tituloProvincia = "Azuay";
            descripcionProvincia = "Province of Azuay is a province of Ecuador, created on 25 June 1824. It encompasses an area of 8,309.58 square kilometres (3,208.35 sq mi). Its capital is Cuenca. It is located in the south center of Ecuador in the highlands. Its mountains reach 4,500 m (14,800 ft) above sea level in the national park of El Cajas. Azuay is located on the Panamerican Highway. Cuenca is connected by national flights from Quito and Guayaquil. It has the largest hydroelectric plant of the country, situated on the river Paute.";
            break;
        case '10':
            tituloProvincia = "Bolivar";
            descripcionProvincia = "Bolívar is a province in Ecuador. The capital is Guaranda. Much of the province has a cool, 'sierra' climate, but the part in the lower foothills has a warm, tropical climate. The province is divided into 7 cantons, Caluma, Chillanes, Chimbo, Echeandia, Guaranda, Las Naves and San Miguel.";
            break;
        case '17':
            tituloProvincia = "Carchi";
            descripcionProvincia = "Carchi is a province in Ecuador. The capital is Tulcán. The provincial economy is based on industrial, and agriculture productions. Carchi produces food, drinks, tobacco, and dairy products. The agriculture sector produces potatoes, maize, etc.";
            break;
        case '19':
            tituloProvincia = "Orellana";
            descripcionProvincia = "Orellana is an inland province of Ecuador. The capital is Puerto Francisco de Orellana (also known as Coca). It was created on July 30, 1998, from part of Napo Province.The name of the province derives from the explorer Francisco de Orellana who it is told to have sailed from somewhere near the town to the Atlantic Ocean. He did this trip several times looking for the gold city of El Dorado and in search of a rumored Nutmeg forest which at the time was a very expensive spice. During his voyages he met a ferocious tribe of Indians who attacked his ships and many among them were women.";
            break;
        case '1':
            tituloProvincia = "Esmeraldas";
            descripcionProvincia = "Esmeraldas is a province in northwestern Ecuador. The capital is Esmeraldas. The province is home to the Afro-Ecuadorian culture. The province is divided into 8 cantons, Atacames, Eloy Alfaro, Esperaldas, Muisne, Quinindé, Río Verde, San Lorenzo.";
            break;
        case '8':
            tituloProvincia = "Cañar";
            descripcionProvincia = "Cañar is a province in Ecuador. The capital is Azogues. At the time of census 2010 the province had a population of 225,184. It contains the 16th-century ruins of Ingapirca, the best-known Inca settlement in Ecuador and a product of their conquest of the indigenous Cañari. The province is divided into 6 cantons, Azogues, Biblián, Cañar, Déleg, El Tambo, Suscal, La Troncal.";
            break;
        case '4':
            tituloProvincia = "Guayas";
            descripcionProvincia = "Guayas is a coastal province in Ecuador. It is bordered to the west by Manabí, Santa Elena, and the Pacific Ocean (as the Gulf of Guayaquil); to the east by Los Ríos, Bolívar, Chimborazo, Cañar, and Azuay; to the north by Los Ríos and Bolívar; and to the south by El Oro and the Pacific Ocean. With a population of over 3 million people, it is the most populous province in Ecuador. It is the fourth largest province in the country in terms of area. The largest city of Ecuador, Guayaquil, is located within the province.";
            break;
        case '9':
            tituloProvincia = "Chimborazo";
            descripcionProvincia = "Chimborazo is a province in the central Ecuadorian Andes. It is a home to a section of Sangay National Park. The capital is Riobamba. The province contains Chimborazo (6,267 m), Ecuador's highest mountain. The province is divided into 10 cantons, Alausí, Chambo, Chunchi, Colta, Cumandá, Guamote, Guano, Pallatanga, Penipe, Riobamba.";
            break;
        case '16':
            tituloProvincia = "Imbabura";
            descripcionProvincia = "Imbabura is a province in Ecuador. The capital is Ibarra. The people of the province speak Spanish and the Imbaburan Quechua language. Imbabura Volcano is located in the province. Best reached from the town of La Esperanza, the 4,609-meter-high mountain can be climbed in a single day. The province is divided into six cantons, Antonio Ante, Cotacachi, Ibarra, Otavalo, Pimampiro, San Miguel de Urcuquí";
            break;
        case '6':
            tituloProvincia = "Loja";
            descripcionProvincia = "Loja Province is one of 24 provinces in Ecuador and shares its southern border on the west by El Oro Province, on the north by El Azuay, and on the east by Zamora-Chinchipe. Founded on its present site in 1548 by Captain Alonso de Mercadillo (Spanish) the site had been previously moved and rebuilt from La Toma due to earthquakes. It also is named as Cuxibamba Valley which means from the Quichua as the Smily valley.";
            break;
        case '2':
            tituloProvincia = "Manabí";
            descripcionProvincia = "Manabí is a province in Ecuador. Its capital is Portoviejo. The province is named after the Manabí people. Manabí's economy is based heavily on natural resources an organic products these include cacao, bananas, cotton and seafood. Its industrial sector is based on Tuna , great quality tobacco, and agua ardiente (spanish whiskey) beverage production. Local productions include crafting of 09montecristi hats, and furniture.";
            break;
        case '20':
            tituloProvincia = "Napo";
            descripcionProvincia = "Napo is a province in Ecuador. Its capital is Tena. The province contains the Napo River. The province is low developed without much industrial presence. The thick rainforest is home to many natives that remain isolated by preference, descendants of those who fled the Spanish invasion in the Andes, and the Incas years before. In 2000, the province was the sole remaining majority-indigenous province of Ecuador, with 56.3% of the province either claiming indigenous identity or speaking an indigenous language.This province is one of the many located in Ecuador's section of the Amazon Rainforest. In Napo province are also Antisana Ecological Reserve and Limoncocha National Biological Reserve.";
            break;
        case '5':
            tituloProvincia = "El oro";
            descripcionProvincia = "El Oro  is the southernmost of Ecuador's coastal provinces. It was named for its historically important gold production. Today it is one of the world's major exporters of bananas. The capital is Machala. El Oro province is historically the major area of banana production in Ecuador.";
            break;
        case '15':
            tituloProvincia = "Pichincha";
            descripcionProvincia = "Pichincha sis a province of Ecuador located in the northern sierra region; its capital and largest city is Quito. It is bordered by Imbabura and Esmeraldas to the north, Cotopaxi and Santo Domingo de los Tsáchilas to the south, Napo and Sucumbíos to the east, and Esmeraldas and Santo Domingo de los Tsáchilas to the west.Prior to 2008, the canton Santo Domingo de los Colorados was part of the Pichincha Province. It has since become its own province, Santo Domingo de los Tsáchilas.";
            break;
        case '11':
            tituloProvincia = "Los Ríos";
            descripcionProvincia = "Los Ríos is a province in Ecuador. The capital is Babahoyo. The province was founded on September 30, 1948, under legistative decree.Its capital Babahoyo was founded October 6, 1860. The province's economy is largely based on its agriculture: coffee, cacao, bananas, rice, tobacco, etc. Its small industrial sector produces paper, sugar, and wood crafts. Recently developed tourist attractions include fishing and native rituals.";
            break;
        case '22':
            tituloProvincia = "Morona Santiago";
            descripcionProvincia = "Morona Santiago is a province in Ecuador. The province was established on February 24, 1954. The capital is Macas. The provincial economy is industrially unexploited to its potential due to poor means of transportation. Its economy relies largely on the tourist sector of the rain forest. The Sangay National Park and the indigenous town of Shuara are some of its main attractions.";
            break;
        case '14':
            tituloProvincia = "Santo Domingo de los Tsáchilas";
            descripcionProvincia = "Santo Domingo de los Tsáchilas is a province in the Republic of Ecuador, created in October 2007 from territory previously in the province of Pichincha. The name of the province refers to a local ethnic group, the Tsáchila, also known as the Colorados on account of the custom of men dyeing their hair with paste made from achiote plants. The provincial capital is Santo Domingo. Its population is approximately 500,000 inhabitants in 2008, fluctuating as it is the third largest city with more population following Guayaquil and Quito. Its population is growing rapidly as it has a rich trade and the largest livestock market in the country. It has a surface area of 3,523 square kilometers (1,360 sq mi) and is situated at an altitude of 165 meters (541 ft). ";
            break;
        case '3':
            tituloProvincia = "Santa Elena";
            descripcionProvincia = "The Province of Santa Elena is a province of Ecuador in the coastal region. Created in 2007 from territory that belonged to the Guayas Province, it is one of the two newest provinces of Ecuador, along with Santo Domingo de Los Tsáchilas. Its capital city is Santa Elena, from which the province derives its name. The province is divided into three cantons, La Libertad, Salinas, Santa Elena.";
            break;
        case '12':
            tituloProvincia = "Tungurahua";
            descripcionProvincia = "Tungurahua is one of the twenty-four provinces of Ecuador. Its capital is Ambato. The province takes its name from the Tungurahua volcano, which is located within the boundaries of the provinces. In 2011, Tungurahua had an estimated population of 581,389. Approximately 10% of that population is made up of indigenous peoples, while another 70% are of mestizo or mixed race heritage. The final 20% is made up of peoples of African, Asian, and European ancestry.";
            break;
        case '18':
            tituloProvincia = "Sucumbíos";
            descripcionProvincia = "Sucumbíos is a province in northeast Ecuador. The capital and largest city is Nueva Loja (normally referred to as Lago Agrio). It is the fifth largest province in the country, with an area of 18,084 km². In 2010, it had a population of 176,472 inhabitants. Sucumbíos was an unexplored area, where only indigenous people lived, until oil was discovered in its soil. In 1979, after nine years of foundation, Nueva Loja became the seat of its own canton, Lago Agrio Canton, in the Napo Province. On February 13, 1989, Sucumbíos became the 21st province in the country when it separated from Napo province.";
            break;
        case '24':
            tituloProvincia = "Galápagos";
            descripcionProvincia = "Galápagos is a province of Ecuador in the country's Insular region, located approximately 1,000 km (620 mi) off the western coast of the mainland. The capital is Puerto Baquerizo Moreno. The province administers the Galápagos Islands, a group of tiny volcanic islands that sit on the equator. The Galápagos Islands have for centuries captured the interest of people from all over the globe because of its unique biodiversity that was made famous by Charles Darwin and his theory of evolution.";
            break;
        case '13':
            tituloProvincia = "Cotopaxi";
            descripcionProvincia = "Cotopaxi is one of the provinces of Ecuador. The capital is Latacunga. The province contains the Cotopaxi Volcano, an intermittent volcano with a height of 19,388 feet. The province is divided into 7 cantons, La Maná, Latacunga, Pangua, Pujilí, Salcedo, Saquisilí, Sigchos.";
            break;
        case '21':
            tituloProvincia = "Pastaza";
            descripcionProvincia = "Pastaza is a province in the Oriente of Ecuador located in the eastern jungle. The capital is Puyo, founded on May 12, 1899 and which boasts 36,700 inhabitants. The city is now accessible by paved roads, a recent development; the main road from Baños follows the Pastaza river into the province. The Pastaza River surges into the province from the west and as the landscape flattens, meanders on to the Napo, a tributary of the Amazon. Natural resources of Pastaza are bananas, grapefruit, tobacco, cocoa and coffee. Tea has successfully been cultivated by a few British companies, and in the mid eighties one of the companies was honored by a visit from Princess Margaret from the royal family of Britain.";
            break;
        case '23':
            tituloProvincia = "Zamora-Chinchipe";
            descripcionProvincia = "Province of Zamora Chinchipe is a province of the Republic of Ecuador, located at the southeastern end of the Amazon Basin, which shares borders with the Ecuadorian provinces of Azuay and Morona Santiago to the north, Loja and Azuay to the west, and with Peru to the east and south. The province comprises an area of approximately 10,456 km² and is covered with a uniquely mountainous topography which markedly distinguishes it from the surrounding Amazonian provinces. Zamora-Chinchipe is characterized and largely identified by its mining industry; indigenous ethnic groups with a rich archaeological legacy; its biodiversity; and its niche and tourist attractions, which include a number of waterfalls well-noted for their beauty. The province takes its name from the bureaucratic fusion of the Zamora and Chinchipe cantons. The provincial capital is the city of Zamora.";
            break;

        default:


            break;
        }

        res.view({
            tituloProvinciaVista: tituloProvincia,
            descripcionProvinciaVista: descripcionProvincia,
            idProvinciaSvgVista: idProvinciaSvg
        });
    },
    //CAPITALES
    capitales: function (req, res) {
        var menuIdCapital = req.param("id");
        var idCapitalSvg = menuIdCapital;
        var tituloCapital = "";
        var descripcionCapital = "";
        var tipoElementoSvg = "";

        switch (menuIdCapital) {
        case '2':
            tituloCapital = "Portoviejo";
            descripcionCapital = "Portoviejo is a city in Ecuador, and the capital the Province of Manabí 30 km from the Pacific coast. (Population: about 250,000). Also known as the city of the Royal Tamarind Trees for the beautiful trees found in the area. Portoviejo is the main political and economical centre of the Portoviejo River valley, which also includes the cantons of Santa Ana and Rocafuerte, where about 110 square kilometers are cultivated every year. The valley is rich in the production of tomatoes, onions, peppers, bananas, mangoes and other tropical fruits. The city, which was affected by economic crisis in the eighties and nineties, is now recovering but severe budget limitations and a huge unemployment rate present difficulties for local authorities.";
            break;
        case '1':
            tituloCapital = "Esmeraldas";
            descripcionCapital = "Esmeraldas is a coastal city in northwestern Ecuador. It is the seat of the Esmeraldas Canton and capital of the Esmeraldas Province. It has an international sea port and a small airport. Esmeraldas is the major seaport of northwestern Ecuador, and it lies on the Pacific coast at the mouth of the Esmeraldas River. It is exactly at the antipodes of Padang, Indonesia. The city is the principal trading hub for the region's agricultural and lumber resources, and is the terminus of the 313-mile (504-km) Trans-Ecuadorian Pipeline from the oil fields in northeastern Ecuador. Esmeraldas is well known around Latin America given the large number of locals that have historically played in the Ecuadorian national football team.";
            break;
        case '11':
            tituloCapital = "Babahoyo";
            descripcionCapital = "Babahoyo founded September 30, 1948, by legislative decree, is the capital of the Los Ríos province of Ecuador. Its population is cited around 153,000. It is bordered by two rivers, the San Pablo and the Caracol, which join to form the Babahoyo River. This meets the Daule River to form the Guayas River, which runs to the Pacific Ocean at the Gulf of Guayaquil. A processing and trade center for the surrounding agricultural region, the city handles rice, sugarcane, fruits, balsa wood, and tagua nuts . Rice and sugar are also milled here.";
            break;
        case '3':
            tituloCapital = "Santa Elena";
            descripcionCapital = "Santa Elena is an Ecuadorian city, capital of the province of Santa Elena. It has a population of 39,681 inhabitants. It is located in the Ecuadorian coast, west of the country. Part of the urban conglomerate sprig Santa Elena, along with Salinas, La Libertad and Jose Luis Tamayo (Muey). The city is the political center of the province. It hosts major cultural, financial, administrative and commercial organizations. It has 2 urban parishes: Ballenita and Santa Elena, which are subdivided into districts.";
            break;
        case '4':
            tituloCapital = "Guayaquil";
            descripcionCapital = "Guayaquil, officially Santiago de Guayaquil , is the largest and the most populous city in Ecuador, with around 2.69 million people in the metropolitan area, as well as the nation's main port. The city is the capital of the Ecuadorian province of Guayas and the seat of the namesake canton. Guayaquil is located on the western bank of the Guayas River, which flows into the Pacific Ocean at the Gulf of Guayaquil.";
            break;
        case '7':
            tituloCapital = "Cuenca";
            descripcionCapital = "The city of Cuenca — in full, Santa Ana de los cuatro ríos de Cuenca — is the capital of the Azuay Province. It is located in the highlands of Ecuador at about 2,500 meters above sea level, with an urban population of approximately 400,000 rising to 700,000 inhabitants in the larger metro area. The centre of the city is listed as a UNESCO World Heritage Trust site due to its many historical buildings. Cuenca is well known for its stunning architecture, tourist attractions, hotels and night activities.";
            break;
        case '5':
            tituloCapital = "Machala";
            descripcionCapital = "Machala is a city in south-west Ecuador. It is the capital of the El Oro Province and located near the Gulf of Guayaquil on fertile lowlands. Machala has a population of 241,606 (2010 census),it is also the fourth biggest city of the country; and the second most important port, it has been referred to as the Banana Capital of the World.";
            break;
        case '6':
            tituloCapital = "Loja";
            descripcionCapital = "Loja is the capital of Ecuador's Loja Province. It is located in the Cuxibamba valley in the south of the country, sharing borders with the provinces of Zamora-Chinchipe and El Oro, and with Peru in the south. Loja holds a rich tradition in the arts, and for this reason is known as the Music and Cultural Capital of Ecuador. The city is home to two major universities. The city has a population of about 181,000, and is situated 2060 m (6758 ft) above sea level. It has a mild Andean climate, ranging between 16 and 30 °C.";
            break;
        case '10':
            tituloCapital = "Guaranda";
            descripcionCapital = "Guaranda is a city in central Ecuador. It is the capital of Bolívar, a province located in the Andes mountains. The city is connected by road with other hubs, including Riobamba, Babahoyo and Ambato. Guaranda is a market town located in a valle – a deep valley in the high Andes, serving a vast hinterland of agricultural settlements peopled by Quechua Indians. Its climate is subtropical, with a long (May – October) dry season. Its population is mainly mestizo, but includes many people of different ethnicities . Supposedly, the city was first colonized by Jewish Conversos fleeing from Lima's Inquisition. This nucleus has been intermarrying for almost five centuries, forming a compact population linked by family connections. Since the 1990s, the indigenous majority has seized political power and most of the local elected officers are of Quechua origin.";
            break;
        case '8':
            tituloCapital = "Azogues";
            descripcionCapital = "Azogues is the capital of Azogues Canton and of Cañar Province in Ecuador. The population of Azogues is 40,000. Azogues is part of Cuenca Metropolitan area (600,000 inhabitants) is known for its Panama hat industry; the hats are produced primarily for export. The city is the seat of the Roman Catholic Diocese of Azogues";
            break;
        case '12':
            tituloCapital = "Ambato";
            descripcionCapital = "Ambato is a city located in the central Andean valley of Ecuador. Lying on the banks of the Ambato River, the city also sits beneath several tall mountains. It is the capital of the province of Tungurahua, at an elevation of 2,577 meters above sea level. It is variously nicknamed City of Flowers and Fruit, Cradle of the Three Juans, and Garden of Ecuador.Inhabitants of Ambato are called Ambateños, Guaytambos(after a type of native peach that the valley is famous for producing) or Patojos.The current mayor of Ambato is Luis Amoroso.";
            break;
        case '13':
            tituloCapital = "Latacunga";
            descripcionCapital = "Latacunga is a plateau town of Ecuador, capital of the Cotopaxi Province, 89 km (55 mi) south of Quito, near the confluence of the Alaquez and Cutuchi rivers to form the Patate, the headstream of the Pastaza. At the time of census 2010 Latacunga had 98,355 inhabitants, largely mestizo and indigenous. Latacunga took its independence from Spain on November 11, 1820. Latacunga is an hour and half south from Quito on the Pan-American Highway. It was previously also on the old road from Quito to Guayaquil, and has a railway station between those cities. It is 9,055 ft (2,760 m). above sea level. Its climate is cold and windy, due to the neighboring snowclad heights, and the barren, pumice-covered tableland on which it stands. The active volcano Cotopaxi is only 25 km. away, and the town has suffered repeatedly from eruptions. ";
            break;
        case '14':
            tituloCapital = "Santo Domingo";
            descripcionCapital = "Santo Domingo de los Colorados, simply referred to as Santo Domingo, is a city and seat of the canton that bears its name. It is the fourth most populous city in Ecuador with a population of over 305,000, is an important commercial and industrial center, and serves as the capital of the Santo Domingo de los Tsáchilas Province. The name, de los Colorados, refers to a local ethnic group, the Tsáchila, and the custom of men in that tribe to dye their hair with extract of the achiote plant; hence Santo Dominigo de los Colorados or Santo Domingo of the Dyed. This group, which is indigenous to the area, is recognised with a substantial statue near the town center.";
            break;
        case '15':
            tituloCapital = "Quito";
            descripcionCapital = "Quito, formally San Francisco de Quito, is the capital city of Ecuador, and at an elevation of 2,850 metres (9,350 ft) above sea level, it is the highest official capital city in the world.It is located in the Guayllabamba river basin, on the eastern slopes of Pichincha,[2] an active stratovolcano in the Andes mountains. With a population of 2,671,191 according to the last census (2014), Quito is the second most populous city in Ecuador, after Guayaquil. It is also the capital of the Pichincha province and the seat of the Metropolitan District of Quito. The canton recorded a population of 2,239,191 residents in the 2010 national census. In 2008, the city was designated as the headquarters of the Union of South American Nations.";
            break;
        case '16':
            tituloCapital = "Ibarra";
            descripcionCapital = "Ibarra is a city in northern Ecuador and the capital of the Imbabura Province. It lies at the foot of the Imbabura Volcano and on the left bank of the Tahuando river. It is about 70 kilometres (43 mi) northeast of Ecuador's capital Quito. Today, Ibarra is a market town popular with tourists. It has mild weather, colonial white-washed houses (giving it the nickname The White City), and cobbled streets. The Santo Domingo church houses a museum holding paintings. The town is the seat of the Roman Catholic Diocese of Ibarra.";
            break;
        case '17':
            tituloCapital = "Tulcán";
            descripcionCapital = "Tulcán is the capital of the province of Carchi in Ecuador. The population of Tulcán is approximately 60,400. Tulcán is known for its hot springs, deep wells, and a 3-acre topiary garden cemetery, the most elaborate topiary in the New World, created in Cupressus sempervirens by José Maria Azael Franco in 1936. The city is the highest in Ecuador, at 2,950 m (9,680 ft) above sea level.he name is a Spaniard derivation of the indigenous peoples' original name Hul-Can, which in Mayan means Warrior.";
            break;
        case '18':
            tituloCapital = "Nueva Loja";
            descripcionCapital = "Also known as Lago Agrio, is the capital of the province of Sucumbíos in Ecuador. It was founded in the 1960s as a base camp of Texaco. The official population as of the 2010 census is 57,727. Nueva Loja is located in central Sucumbíos, in the Amazonian forest, and is one of the most important cities in northeastern Ecuador. Its importance comes from the oil extraction. It is named after Loja as many of the first colonizers came from the Southern Province of Loja.";
            break;
        case '19':
            tituloCapital = "Puerto Francisco de Orellana";
            descripcionCapital = "Puerto Francisco de Orellana, also known as El Coca, is the capital of province of Orellana in eastern Ecuador. The city is located in the Amazon Rainforest at the confluence of the Coca River and the Napo River (the smaller Payamino River also merges into the Napo in the city). It has a population of 45,163 inhabitants as of 2010. It is visited by tourists going into the Amazonian forest and is served by the Francisco de Orellana Airport.";
            break;
        case '20':
            tituloCapital = "Tena";
            descripcionCapital = "Tena, the capital of the Napo Province, is a city in the Amazon rainforest. Known as the cinnamon capital of Ecuador, and originally founded by missionary explorers, Tena has emerged as a major commercial center of Ecuador. It is home to a regional hospital and many tourist related businesses, including a small airport and a vital bus terminal. Tena is a popular launching point for jungle, kayaking and rafting tours in Ecuador's Amazon rainforest region. The entry to the city is marked by a statue of the indigenous hero Jumandy, who led an uprising against the Spanish colonizers in 1578 and was subsequently executed.";
            break;
        case '21':
            tituloCapital = "Puyo";
            descripcionCapital = "Puyo, also known as El Puyo, is the capital of Pastaza, a province in Ecuador. Puyo is located at an altitude of approximately 950 AMSL by the Puyo River, a tributary of the Pastaza River, which eventually leads into the Amazon River. True to its name, derived from the Kichwa word for cloudy, the local climate is a wet one and the weather is often overcast. Puyo was founded in 1899. Located between Baños, and the Amazonian cities of Tena and Macas, Puyo is the commercial, cultural and political capital of the region. The city is connected by road to Ambato, Tena, and Macas and from there to the major urban areas of Ecuador. In late 2006, the city had approximately 25,000 inhabitants. It was the fastest growing city in Ecuador in 2006.";
            break;
        case '22':
            tituloCapital = "Macas";
            descripcionCapital = "Macas is the capital of Morona Santiago province in southeastern Ecuador. The city is also the seat of the county Morona. Known as the Emerald of the East due to its location east of the Andes mountains, Macas lies in the Upano Valley overlooking the Upano river. The city has a population of 14,054 inhabitants and along with Tena and Puyo served under Spanish rule as one of Ecuador's main staging points for the colonization of the Amazon and the subjugation of its indigenous peoples. Beginning in the 1960s indigenous people have organized political federations and movements, and often locate the seats of their organizations in such cities and use them as central places for regional congresses. Macas has also been promoting tourism.";
            break;
        case '23':
            tituloCapital = "Zamora";
            descripcionCapital = "Zamora is a city in southeastern Ecuador, capital of Zamora-Chinchipe province and cantonal head of Zamora Canton. Zamora is the principal and populous city in Zamora-Chinchipe. It is located in the foothills of the Andes mountains at 970 m above sea level, on the convergence of the Zamora, Bombuscaro and Jamboé rivers. Zamora has experienced a boom in growth in recent years, attributed to the discovery of gold in the surrounding region, by this has been known as Mining Capital of Ecuador and actually as well as City of Birds and Waterfalls, referring it to the constant presence of various types of birds and several waterfalls which emerge from the streams that surround the city. The city stretches from west to east towards Cumbaratza. It is connected by several bus and coach trips to other cantons and provinces.";
            break;
        case '24':
            tituloCapital = "Puerto Baquerizo Moreno";
            descripcionCapital = "Puerto Baquerizo Moreno is the capital of Galápagos Province, Ecuador. It is located on the southwestern coast of San Cristóbal, the easternmost island in the archipelago, and is the capital of San Cristóbal Canton. It was founded by General Villamil Playas in the mid-19th century, and takes its name from President Alfredo Baquerizo Moreno (1859–1951). Today, fishing is the main activity of the locals, but tourism is on the increase along the waterfront with numerous hotels and shops. The town has a cathedral, a post office, police station, a hospital, and a branch of the Universidad San Francisco de Quito. It also contains the Centro de Interpretación of the Galápagos National Park, which was established in 1988, and a natural history museum. It is served by San Cristóbal Airport, which connects to mainland Ecuador.";
            break;

        default:


            break;
        }

        res.view({
            tituloCapitalVista: tituloCapital,
            descripcionCapitalVista: descripcionCapital,
            idCapitalSvgVista: idCapitalSvg
        });
    },

    //ferroviario
    ferrea: function (req, res) {
        var menuIdFerrea = req.param("id");
        var idFerreaSvg = menuIdFerrea;
        var tituloFerrea = "";
        var descripcionFerrea = "";

        switch (menuIdFerrea) {
        case '1':
            tituloFerrea = "San Lorenzo - Lita";
            descripcionFerrea = "Avenida de los Volcanes";
            break;
        case '2':
            tituloFerrea = "Lita - Carchi";
            descripcionFerrea = "Avenida de los Volcanes";
            break;
        case '3':
            tituloFerrea = "Carchi - Salinas";
            descripcionFerrea = "Tren de la Libertad";
            break;
        case '4':
            tituloFerrea = "Salinas - Ibarra";
            descripcionFerrea = "Tren de la Libertad";
            break;
        case '5':
            tituloFerrea = "Ibarra - Otavalo";
            descripcionFerrea = "Camino del Boliche";
            break;
        case '6':
            tituloFerrea = "Otavalo - Quito";
            descripcionFerrea = "Avenida de los Volcanes";
            break;
        case '7':
            tituloFerrea = "Quito - Latacunga";
            descripcionFerrea = "Avenida de los Volcanes";
            break;
        case '8':
            tituloFerrea = "Latacunga - Ambato";
            descripcionFerrea = "Tren del Hielo";
            break;
        case '9':
            tituloFerrea = "Ambato - Urbina";
            descripcionFerrea = "Tren del Hielo";
            break;
        case '10':
            tituloFerrea = "Urbina - Riobamba";
            descripcionFerrea = "Tren del Hielo";
            break;
        case '11':
            tituloFerrea = "Riobamba - Alausí";
            descripcionFerrea = "Tren de la Dulzura";
            break;
        case '15':
            tituloFerrea = "Bucay - Milagro";
            descripcionFerrea = "Tren de la Dulzura";
            break;
        case '16':
            tituloFerrea = "Milagro - Yaguachi";
            descripcionFerrea = "Tren de la Dulzura";
            break;
        case '17':
            tituloFerrea = "Yaguachi - Duran";
            descripcionFerrea = "Sendero de Arrozales";
            break;
        case '19':
            tituloFerrea = "El Tambo - Coyoctor";
            descripcionFerrea = "Baños del Inca";
            break;
        case '20':
            tituloFerrea = "Coyoctor - Cuenca";
            descripcionFerrea = "Baños del Inca";
            break;
        case '14':
            tituloFerrea = "Huigra - Bucay";
            descripcionFerrea = "Nariz del Diablo";
            break;
        case '13':
            tituloFerrea = "Simbabe - Huigra";
            descripcionFerrea = "Nariz del Diablo";
            break;
        case '12':
            tituloFerrea = "Alausí - Simbabe";
            descripcionFerrea = "Nariz del Diablo";
            break;
        case '18':
            tituloFerrea = "Huigra - El Tambo";
            descripcionFerrea = "Baños del Inca";
            break;



        default:


            break;
        }

        res.view({
            tituloFerreaVista: tituloFerrea,
            descripcionFerreaVista: descripcionFerrea,
            idFerreaSvgVista: idFerreaSvg
        });
    },


    metro: function (req, res) {
        var menuIdEstacion = req.param("id");
        var idEstacionSvg = menuIdEstacion;
        var tituloEstacion = "";
        var descripcionEstacion = "";

        switch (menuIdEstacion) {
        case '1':
            tituloEstacion = "Le Carrefour";
            descripcionEstacion = "Le Carrefour Station";
            break;
        case '2':
            tituloEstacion = "Saint-Martin";
            descripcionEstacion = "Saint-Martin Station";
            break;

        default:

            break;
        }

        res.view({
            tituloEstacionVista: tituloEstacion,
            descripcionEstacionVista: descripcionEstacion,
            idEstacionVista: idEstacionSvg
        });
    },

    //Mapas Originales


    //Seteo de Cookies
    cookieStart: function (req, res) {
        var tipocookie = req.param("tipocookie");
        var valorcookie = req.param("valorcookie");

        switch (tipocookie) {
        case 'estilo':
            res.cookie('estilo', valorcookie);
            break;
        case 'tipoletra':
            res.cookie('tipoletra', valorcookie);
            break;
        case 'tamanioletra':
            res.cookie('tamanioletra', valorcookie);
            break;
        case 'espaciadoletra':
            res.cookie('espaciadoletra', valorcookie);
            break;
        case 'saturate':
            res.cookie('saturate', valorcookie);
            break;
        case 'grises':
            res.cookie('grises', valorcookie);
            break;
        case 'sepia':
            res.cookie('sepia', valorcookie);
            break;
        case 'tono':
            res.cookie('tono', valorcookie);
            break;
        case 'contraste':
            res.cookie('contraste', valorcookie);
            break;
        case 'brillo':
            res.cookie('brillo', valorcookie);
            break;
        case 'opacidad':
            res.cookie('opacidad', valorcookie);
            break;
        case 'invertido':
            res.cookie('invertido', valorcookie);
            break;
        case 'mapapatron':
            res.cookie('mapapatron', valorcookie);
            break;


        default:
            break;
        }

        res.json({
            ok: "ok"
        });
    },

    //Lectura De Cookies
    cookieRead: function (req, res) {

        var estilo = (req.cookies.estilo) ? req.cookies.estilo : 'estilo.css';

        var tipoLetra = (req.cookies.tipoletra) ? req.cookies.tipoletra : 'Arial';

        var tamanioLetra = (req.cookies.tamanioletra) ? req.cookies.tamanioletra : 1;

        var espaciadoLetra = (req.cookies.espaciadoletra) ? req.cookies.espaciadoletra : 1;

        var saturacion = (req.cookies.saturate) ? req.cookies.saturate : 1;

        var contraste = (req.cookies.contraste) ? req.cookies.contraste : 1;
        var brillo = (req.cookies.brillo) ? req.cookies.brillo : 1;
        var opacidad = (req.cookies.opacidad) ? req.cookies.opacidad : 1;
        var invertido = (req.cookies.invertido) ? req.cookies.invertido : 0;
        var tono = (req.cookies.tono) ? req.cookies.tono : 0;
        var sepia = (req.cookies.sepia) ? req.cookies.sepia : 0;
        var grises = (req.cookies.grises) ? req.cookies.grises : 0;
        var mapapatron = (req.cookies.mapapatron) ? req.cookies.mapapatron : 'original';
        console.log("aqui");

        res.json({
            estilo: estilo,
            tipoLetra: tipoLetra,
            tamanioLetra: tamanioLetra,
            espaciadoLetra: espaciadoLetra,
            saturacion: saturacion,
            contraste: contraste,
            brillo: brillo,
            opacidad: opacidad,
            invertido: invertido,
            tono: tono,
            sepia: sepia,
            grises: grises,
            mapapatron: mapapatron

        });
    },

    //mapa Original desde jquery
    mapaOriginal: function (req, res) {

        var mapa = '';

        var variableswitch = req.param("mapa");

        console.log(variableswitch);

        switch (variableswitch) {
        case 'capitales':
            mapa = 'mapacapitales.ejs';
            break;
        case 'provincias':
            mapa = 'mapaProvincias.ejs';
            break;
        case 'ferrea':
            mapa = 'mapaFerroviario.ejs';
            break;
        default:
            break;
        }


        var id = req.param("seleccion");;

        var vista = 'Mapa/' + mapa;

        console.log(vista);

        res.view(vista, {
            idFerreaSvgVista: id,
            idProvinciaSvgVista: id,
            idCapitalesSvgVista: id,
            layout: null
        });

    }

};