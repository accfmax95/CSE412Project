--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2022-11-17 16:02:53

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 24704)
-- Name: animal; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.animal (
    animal_id integer NOT NULL,
    scientific_name character varying(255),
    life_span integer
);


ALTER TABLE public.animal OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 24709)
-- Name: animaldetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.animaldetails (
    animal_id integer NOT NULL,
    animal_detail_id integer NOT NULL,
    population integer,
    city_id integer
);


ALTER TABLE public.animaldetails OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 24724)
-- Name: city; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.city (
    city_id integer NOT NULL,
    city_name character varying(255),
    state_id integer
);


ALTER TABLE public.city OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 24719)
-- Name: state; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.state (
    state_id integer NOT NULL,
    state_name character varying(255)
);


ALTER TABLE public.state OWNER TO postgres;

--
-- TOC entry 3324 (class 0 OID 24704)
-- Dependencies: 209
-- Data for Name: animal; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.animal (animal_id, scientific_name, life_span) FROM stdin;
1	Fratercula corniculata	66
2	Ceratotherium simum	34
3	Sciurus vulgaris	79
4	Agelaius phoeniceus	39
5	Semnopithecus entellus	72
6	Bison bison	32
7	Porphyrio porphyrio	40
8	Dasyurus maculatus	35
9	Colaptes campestroides	20
10	Anastomus oscitans	64
11	Eolophus roseicapillus	38
12	Terrapene carolina	60
13	Uraeginthus bengalus	51
14	Crax sp.	94
15	Aonyx cinerea	60
16	Actophilornis africanus	62
17	Panthera pardus	15
18	Pseudocheirus peregrinus	16
19	Cacatua galerita	57
20	Phalacrocorax niger	29
\.


--
-- TOC entry 3325 (class 0 OID 24709)
-- Dependencies: 210
-- Data for Name: animaldetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.animaldetails (animal_id, animal_detail_id, population, city_id) FROM stdin;
1	1	1256	1
2	2	1608	2
3	3	9628	3
4	4	3879	4
5	5	655	5
6	6	6726	6
7	7	1242	7
8	8	8691	8
9	9	6081	9
10	10	5138	10
11	11	8073	11
12	12	865	12
13	13	7103	13
14	14	5792	13
15	15	4670	15
16	16	5707	16
17	17	4127	17
19	19	1443	19
20	20	6000	20
18	18	8517	18
\.


--
-- TOC entry 3327 (class 0 OID 24724)
-- Dependencies: 212
-- Data for Name: city; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.city (city_id, city_name, state_id) FROM stdin;
1	Karimnagar	1
2	Itanagar	2
3	Lachung	3
4	Kausani	4
5	Kumarakom	5
6	Resubelpara	6
7	Bishalgarh	7
8	Gwalior	8
9	Anaheim	9
10	Hyderabad	10
11	Varanasi	11
12	Puri	12
13	Kwakta	13
15	Pune	15
16	Lucknow	16
17	Belonia	17
18	Jamshedpur	18
19	Resubelpara	19
20	Bhuj	20
\.


--
-- TOC entry 3326 (class 0 OID 24719)
-- Dependencies: 211
-- Data for Name: state; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.state (state_id, state_name) FROM stdin;
1	Telangana
2	Arunachal Pradesh
3	Sikkim
4	Uttarakhand
5	Kerala
6	Meghalaya
7	Tripura
8	Haryana
9	Uttarakhand
10	Andhra Pradesh
11	Uttar Pradesh
12	Odisha
13	Manipur
15	Maharashtra
16	Uttar Pradesh
17	Tripura
18	Jharkhand
19	Meghalaya
20	Gujarat
\.


--
-- TOC entry 3176 (class 2606 OID 24708)
-- Name: animal animal_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.animal
    ADD CONSTRAINT animal_pkey PRIMARY KEY (animal_id);


--
-- TOC entry 3178 (class 2606 OID 24713)
-- Name: animaldetails animaldetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.animaldetails
    ADD CONSTRAINT animaldetails_pkey PRIMARY KEY (animal_detail_id);


--
-- TOC entry 3182 (class 2606 OID 24728)
-- Name: city city_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.city
    ADD CONSTRAINT city_pkey PRIMARY KEY (city_id);


--
-- TOC entry 3180 (class 2606 OID 24723)
-- Name: state state_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.state
    ADD CONSTRAINT state_pkey PRIMARY KEY (state_id);


--
-- TOC entry 3183 (class 2606 OID 24714)
-- Name: animaldetails animaldetails_animal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.animaldetails
    ADD CONSTRAINT animaldetails_animal_id_fkey FOREIGN KEY (animal_id) REFERENCES public.animal(animal_id);


--
-- TOC entry 3184 (class 2606 OID 24729)
-- Name: city city_state_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.city
    ADD CONSTRAINT city_state_id_fkey FOREIGN KEY (state_id) REFERENCES public.state(state_id);


-- Completed on 2022-11-17 16:02:53

--
-- PostgreSQL database dump complete
--

