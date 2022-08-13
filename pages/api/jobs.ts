import type { NextApiRequest, NextApiResponse } from 'next'
import { JobsType } from '../../data/hooks/useJobs'


const jobs = [
    {
        "title": "PHP Entwickler",
        "company": "Honeypot GmbH",
        "address": "Schlesische Straße 26, Berlin",
        "salary": "70.000 - 100.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "Senior Magento 2 Developer (m/w/d)",
        "company": "FC-Moto GmbH & Co. KG",
        "address": "Aachener Straße 21-23, Würselen",
        "salary": "40.000 - 60.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "Webentwickler (w/m/d) mit Berufserfahrung",
        "company": "PLANWERK 6 websolutions GmbH",
        "address": "Herderstr. 18, Düsseldorf",
        "salary": "45.000 - 65.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "PHP Developer / Full-Stack Developer (m/w/d)",
        "company": "Plan Software GmbH",
        "address": "Martin-Luther Str., 20, Saarbrücken",
        "salary": "40.000 - 55.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "PHP Full Stack Entwickler (m/w/d)",
        "company": "Doopic GmbH",
        "address": "Kurfürstendamm 71, Berlin",
        "salary": "50.000 - 80.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "Lead Software Engineer Backend (m/w/d)",
        "company": "Workwise GmbH",
        "address": "Erbprinzenstraße 27, Karlsruhe + Remote",
        "salary": "60.000 - 90.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "PHP Backend Developer im Startup (m/w/d)",
        "company": "Workwise GmbH",
        "address": "Erbprinzenstraße 27, Karlsruhe + Remote",
        "salary": "45.000 - 60.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "PHP Senior Developer / Full Stack Web-Entwickler m/w/d",
        "company": "Stuhloase GmbH & Co. KG",
        "address": "Schwarzer Weg 101, Borken",
        "salary": "45.000 - 65.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "PHP- Entwickler/Fullstack Entwickler (m/w/d)",
        "company": "NAUE GmbH & Co. KG",
        "address": "Gewerbestr., 2, Espelkamp",
        "salary": "30.000 - 55.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "PHP Entwickler (m/w/d)",
        "company": "esklusiv GmbH",
        "address": "Rüschhausweg 3, Münster + Remote",
        "salary": "55.000 - 70.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "Senior PHP Entwickler / DevOps 60-100% (m/w/d)",
        "company": "myTV AG Teleboy",
        "address": "Seestrasse 513, Zürich",
        "salary": "80.000 - 110.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "Fullstackentwickler Web (m/w/d)",
        "company": "m3connect GmbH",
        "address": "Friedlandstraße 18, Aachen",
        "salary": "40.000 - 70.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "Webentwickler (m/w/d) mit Fokus auf Symfony",
        "company": "m3connect GmbH",
        "address": "Friedlandstraße 18, Aachen",
        "salary": "40.000 - 70.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "PHP-Entwickler (m/w/d)",
        "company": "hallöchen GmbH",
        "address": "Düsseldorfer Straße 57, Leverkusen",
        "salary": "40.000 - 55.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "Full Stack PHP/Web Developer (m/w/d)",
        "company": "Leonhardt Multimedia GmbH",
        "address": "Oranienburger Str. 4, Berlin",
        "salary": "45.000 - 55.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "Senior Web Application Developer (m/f/d)",
        "company": "Surplex GmbH",
        "address": "Theodorstraße 105, Düsseldorf",
        "salary": "55.000 - 70.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "Senior PHP- / Symfony-Entwickler (w/m/d)",
        "company": "zeroseven design studios",
        "address": "Frauenstraße 83, Ulm",
        "salary": "40.000 - 55.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "Webentwickler PHP/TYPO3 (m/w/d)",
        "company": "zeroseven design studios",
        "address": "Frauenstraße 83, Ulm",
        "salary": "40.000 - 55.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "Webentwickler PHP/E-Commerce (m/w/d) Shopware",
        "company": "zeroseven design studios",
        "address": "Frauenstraße 83, Ulm",
        "salary": "35.000 - 45.000 EUR",
        "img": "img/company.jpeg"
    },
    {
        "title": "(Senior) Application Engineer PHP/Spryker - Karlsruhe",
        "company": "Unic GmbH Deutschland",
        "address": "Kaiserstrasse 201, Karlsruhe + Remote",
        "salary": "45.000 - 65.000 EUR ❖",
        "img": "img/company.jpeg"
    },
    {
        "title": "PHP-Webentwickler*in E-Commerce-Lösungen - Karlsruhe",
        "company": "Unic GmbH Deutschland",
        "address": "Kaiserstrasse 201, Karlsruhe + Remote",
        "salary": "45.000 - 65.000 EUR ❖",
        "img": "img/company.jpeg"
    }
]


export default (req: NextApiRequest, res: NextApiResponse<JobsType>) => {
    res.status(200).json(jobs)
}