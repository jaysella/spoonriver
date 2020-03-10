import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SEO from '../components/seo'

import styles from './index.module.sass'

import ForceGraph2D from 'react-force-graph-2d'

let data = {
    "nodes": [
        {
            "id": "Hod Putt",
            "group": 1
        },
        {
            "id": "Ollie McGee",
            "group": 6
        },
        {
            "id": "Fletcher McGee",
            "group": 6
        },
        {
            "id": "Robert Fulton Tanner",
            "group": 1
        },
        {
            "id": "Cassius Hueffer",
            "group": 5
        },
        {
            "id": "Serepta Hueffer",
            "group": 5
        },
        {
            "id": "Amanda Barker",
            "group": 1
        },
        {
            "id": "Constance Harley",
            "group": 1
        },
        {
            "id": "Chase Henry",
            "group": 1
        },
        {
            "id": "Harry Carey Goodhue",
            "group": 1
        },
        {
            "id": "Judge Somers",
            "group": 1
        },
        {
            "id": "Kinsey Keene",
            "group": 1
        },
        {
            "id": "Benjamin Pantier",
            "group": 2
        },
        {
            "id": "Mrs. Benjamin Pantier",
            "group": 2
        },
        {
            "id": "Reuben Pantier",
            "group": 2
        },
        {
            "id": "Emily Sparks",
            "group": 1
        },
        {
            "id": "Trainor the Druggist",
            "group": 1
        },
        {
            "id": "Daisy Fraser",
            "group": 3
        },
        {
            "id": "Benjamin Fraser",
            "group": 3
        },
        {
            "id": "Minerva Jones",
            "group": 4
        },
        {
            "id": "“Indignation” Jones",
            "group": 4
        },
        {
            "id": "Doc Myers",
            "group": 7
        },
        {
            "id": "Mrs. Meyers",
            "group": 7
        },
        {
            "id": "“Butch” Weldy",
            "group": 1
        },
        {
            "id": "Knowlt Hoheimer",
            "group": 1
        },
        {
            "id": "Lydia Puckett",
            "group": 1
        },
        {
            "id": "Frank Drummer",
            "group": 8
        },
        {
            "id": "Hare Drummer",
            "group": 8
        },
        {
            "id": "Doc Hill",
            "group": 1
        },
        {
            "id": "Andy the Night-Watch",
            "group": 1
        },
        {
            "id": "Sarah Brown",
            "group": 1
        },
        {
            "id": "Percy Bysshe Shelley",
            "group": 1
        },
        {
            "id": "Flossie Cabanis",
            "group": 1
        },
        {
            "id": "Julia Miller",
            "group": 1
        },
        {
            "id": "Johnnie Sayre",
            "group": 1
        },
        {
            "id": "Charlie French",
            "group": 1
        },
        {
            "id": "Zenas Witt",
            "group": 1
        },
        {
            "id": "Theodrore the Poet",
            "group": 1
        },
        {
            "id": "The Town Marshall",
            "group": 1
        },
        {
            "id": "Jack McGuire",
            "group": 1
        },
        {
            "id": "Dorcas Gustine",
            "group": 1
        },
        {
            "id": "Nicholas Bindle",
            "group": 1
        },
        {
            "id": "Jacob Goodpasture",
            "group": 1
        },
        {
            "id": "Harold Arnett",
            "group": 1
        },
        {
            "id": "Margaret Fuller Slack",
            "group": 1
        },
        {
            "id": "George Trimble",
            "group": 1
        },
        {
            "id": "Dr. Siegfried Iseman",
            "group": 1
        },
        {
            "id": "“Ace” Shaw",
            "group": 1
        },
        {
            "id": "Lois Spears",
            "group": 1
        },
        {
            "id": "Justice Arnett",
            "group": 1
        },
        {
            "id": "Willard Fluke",
            "group": 1
        },
        {
            "id": "Aner Clute",
            "group": 1
        },
        {
            "id": "Lucius Atherton",
            "group": 1
        },
        {
            "id": "Homer Clapp",
            "group": 1
        },
        {
            "id": "Deacon Taylor",
            "group": 1
        },
        {
            "id": "Sam Hookey",
            "group": 1
        },
        {
            "id": "Cooney Potter",
            "group": 1
        },
        {
            "id": "Fiddler Jones",
            "group": 1
        },
        {
            "id": "Nellie Clark",
            "group": 1
        },
        {
            "id": "Louise Smith",
            "group": 1
        },
        {
            "id": "Herbert Marshall",
            "group": 1
        },
        {
            "id": "George Gray",
            "group": 1
        },
        {
            "id": "Hon. Henry Bennett",
            "group": 1
        },
        {
            "id": "Griffy the Cooper",
            "group": 1
        },
        {
            "id": "Sexsmith the Dentist",
            "group": 1
        },
        {
            "id": "A.D. Blood",
            "group": 1
        },
        {
            "id": "Robert Southey Burke",
            "group": 1
        },
        {
            "id": "Dora Williams",
            "group": 9
        },
        {
            "id": "Mrs. Williams",
            "group": 9
        },
        {
            "id": "William and Emily",
            "group": 1
        },
        {
            "id": "The Circuit Judge",
            "group": 1
        },
        {
            "id": "Blind Jack",
            "group": 1
        },
        {
            "id": "John Horace Burleson",
            "group": 1
        },
        {
            "id": "Nancy Knapp",
            "group": 1
        },
        {
            "id": "Barry Holden",
            "group": 1
        },
        {
            "id": "State's Attorney Fallas",
            "group": 1
        },
        {
            "id": "Wendell P. Boyd",
            "group": 1
        },
        {
            "id": "Francis Turner",
            "group": 1
        },
        {
            "id": "Franklin Jones",
            "group": 1
        },
        {
            "id": "John M. Church",
            "group": 1
        },
        {
            "id": "Russian Sonia",
            "group": 1
        },
        {
            "id": "Isa Nutter",
            "group": 1
        },
        {
            "id": "Barney Hainsfeather",
            "group": 1
        },
        {
            "id": "Petit, the Poet",
            "group": 1
        },
        {
            "id": "Pauline Barrett",
            "group": 1
        },
        {
            "id": "Mrs. Charles Bliss",
            "group": 1
        },
        {
            "id": "Mrs. George Reece",
            "group": 1
        },
        {
            "id": "Rev. Lemuel Wiley",
            "group": 1
        },
        {
            "id": "Thomnas Ross, Jr.",
            "group": 1
        },
        {
            "id": "Rev. Abner Peet",
            "group": 1
        },
        {
            "id": "Jefferson Howard",
            "group": 1
        },
        {
            "id": "Judge Selah Lively",
            "group": 1
        },
        {
            "id": "Albert Schirding",
            "group": 1
        },
        {
            "id": "Jonas Keene",
            "group": 1
        },
        {
            "id": "Eugenia Todd",
            "group": 1
        },
        {
            "id": "Yee Bow",
            "group": 1
        },
        {
            "id": "Washington McNeely",
            "group": 1
        },
        {
            "id": "Paul McNeely",
            "group": 10
        },
        {
            "id": "Mary McNeely",
            "group": 10
        },
        {
            "id": "Daniel M'Cumber",
            "group": 1
        },
        {
            "id": "Georgine Sand Miner",
            "group": 1
        },
        {
            "id": "Thomas Rhodes",
            "group": 1
        },
        {
            "id": "Ida Chicken",
            "group": 1
        },
        {
            "id": "Penniwit, the Artist",
            "group": 1
        },
        {
            "id": "Jim Brown",
            "group": 1
        },
        {
            "id": "Robert Davidson",
            "group": 1
        },
        {
            "id": "Elsa Wertman",
            "group": 1
        },
        {
            "id": "Hamilton Greene",
            "group": 1
        },
        {
            "id": "Ernest Hyde",
            "group": 1
        },
        {
            "id": "Roger Heston",
            "group": 1
        },
        {
            "id": "Amos Sibley",
            "group": 11
        },
        {
            "id": "Mrs. Sibley",
            "group": 11
        },
        {
            "id": "Adam Weirauch",
            "group": 1
        },
        {
            "id": "Ezra Barlett",
            "group": 1
        },
        {
            "id": "Amelia Garrick",
            "group": 1
        },
        {
            "id": "John Hancock Otis",
            "group": 1
        },
        {
            "id": "Anthony Findlay",
            "group": 1
        },
        {
            "id": "John Cabanis",
            "group": 1
        },
        {
            "id": "The Unknown",
            "group": 1
        },
        {
            "id": "Alexander Throckmorton",
            "group": 1
        },
        {
            "id": "Jonathan Swift Somers",
            "group": 1
        },
        {
            "id": "Widow McFarlane",
            "group": 1
        },
        {
            "id": "Carl Hamblin",
            "group": 1
        },
        {
            "id": "Editor Whedon",
            "group": 1
        },
        {
            "id": "Eugene Carman",
            "group": 1
        },
        {
            "id": "Clarence Fawcett",
            "group": 1
        },
        {
            "id": "W. Lloyd Garrison Standard",
            "group": 1
        },
        {
            "id": "Professor Newcomer",
            "group": 1
        },
        {
            "id": "Ralph Rhodes",
            "group": 1
        },
        {
            "id": "Mickey M'Grew",
            "group": 1
        },
        {
            "id": "Rosie Roberts",
            "group": 1
        },
        {
            "id": "Oscar Hummel",
            "group": 1
        },
        {
            "id": "Roscoe Purkapile",
            "group": 12
        },
        {
            "id": "Mrs. Purkapile",
            "group": 1
        },
        {
            "id": "Josiah Tompkins",
            "group": 1
        },
        {
            "id": "Mrs. Kessler",
            "group": 1
        },
        {
            "id": "Harmon Whitney",
            "group": 1
        },
        {
            "id": "Bert Kessler",
            "group": 1
        },
        {
            "id": "Lambert Hutchins",
            "group": 1
        },
        {
            "id": "Lillian Stewart",
            "group": 1
        },
        {
            "id": "Hortesne Robbins",
            "group": 1
        },
        {
            "id": "Batterton Dobyns",
            "group": 1
        },
        {
            "id": "Jacob Godbey",
            "group": 1
        },
        {
            "id": "Walter Simmons",
            "group": 1
        },
        {
            "id": "Tom Beatty",
            "group": 1
        },
        {
            "id": "Roy Butler",
            "group": 1
        },
        {
            "id": "Searcy Foot",
            "group": 1
        },
        {
            "id": "Edmund Pollard",
            "group": 1
        },
        {
            "id": "Percival Sharp",
            "group": 1
        },
        {
            "id": "Hiram Scates",
            "group": 1
        },
        {
            "id": "Peleg Poague",
            "group": 1
        },
        {
            "id": "Jeduthan Hawley",
            "group": 1
        },
        {
            "id": "Abel Melveny",
            "group": 1
        },
        {
            "id": "Oaks Tutt",
            "group": 1
        },
        {
            "id": "Elliott Hawkins",
            "group": 1
        },
        {
            "id": "Voltaire Johnson",
            "group": 1
        },
        {
            "id": "English Thornton",
            "group": 1
        },
        {
            "id": "Enoch Dunlap",
            "group": 1
        },
        {
            "id": "Ida Frickey",
            "group": 1
        },
        {
            "id": "Seth Compton",
            "group": 1
        },
        {
            "id": "Felix Schmidt",
            "group": 1
        },
        {
            "id": "Schroeder the Fisherman",
            "group": 1
        },
        {
            "id": "Richard Bone",
            "group": 1
        },
        {
            "id": "Silas Dement",
            "group": 1
        },
        {
            "id": "Dillard Sissman",
            "group": 1
        },
        {
            "id": "Jonathan Houghton",
            "group": 1
        },
        {
            "id": "E.C. Culbertson",
            "group": 1
        },
        {
            "id": "Shack Dye",
            "group": 1
        },
        {
            "id": "Hildrup Tubbs",
            "group": 1
        },
        {
            "id": "Henry Tripp",
            "group": 1
        },
        {
            "id": "Granville Calhoun",
            "group": 13
        },
        {
            "id": "Henry C. Calhoun",
            "group": 13
        },
        {
            "id": "Alfred Moir",
            "group": 1
        },
        {
            "id": "Perry Zoll",
            "group": 1
        },
        {
            "id": "Dippold the Optician",
            "group": 1
        },
        {
            "id": "Magrady Graham",
            "group": 1
        },
        {
            "id": "Archibald Higbie",
            "group": 1
        },
        {
            "id": "Tom Merritt",
            "group": 14
        },
        {
            "id": "Mrs. Merritt",
            "group": 14
        },
        {
            "id": "Elmar Karr",
            "group": 1
        },
        {
            "id": "Elizabeth Childers",
            "group": 1
        },
        {
            "id": "Edith Conant",
            "group": 1
        },
        {
            "id": "Charles Webster",
            "group": 1
        },
        {
            "id": "Father Malloy",
            "group": 1
        },
        {
            "id": "Ami Green",
            "group": 1
        },
        {
            "id": "Calbin Campbell",
            "group": 1
        },
        {
            "id": "Henry Layton",
            "group": 1
        },
        {
            "id": "Harlan Sewall",
            "group": 1
        },
        {
            "id": "Ippolit Konovaloff",
            "group": 1
        },
        {
            "id": "Henry Phipps",
            "group": 1
        },
        {
            "id": "Harry Wilmans",
            "group": 1
        },
        {
            "id": "John Wasson",
            "group": 1
        },
        {
            "id": "Many soldiers",
            "group": 1
        },
        {
            "id": "Godwin James",
            "group": 1
        },
        {
            "id": "Lyman King",
            "group": 1
        },
        {
            "id": "Caroline Branson",
            "group": 1
        },
        {
            "id": "Anne Rutledge",
            "group": 1
        },
        {
            "id": "Hamlet Micure",
            "group": 1
        },
        {
            "id": "Mabel Osborne",
            "group": 1
        },
        {
            "id": "William H. Herndon",
            "group": 1
        },
        {
            "id": "Rebecca Wasson",
            "group": 1
        },
        {
            "id": "Rutherford McDowell",
            "group": 1
        },
        {
            "id": "Hannah Armstrong",
            "group": 1
        },
        {
            "id": "Lucinda Matlock",
            "group": 15
        },
        {
            "id": "Davis Matlock",
            "group": 15
        },
        {
            "id": "Herman Altman",
            "group": 1
        },
        {
            "id": "Jennie M'Grew",
            "group": 1
        },
        {
            "id": "Columbus Cheney",
            "group": 1
        },
        {
            "id": "Wallace Ferguson",
            "group": 1
        },
        {
            "id": "Marie Bateson",
            "group": 1
        },
        {
            "id": "Tennessee Claflin Shope",
            "group": 1
        },
        {
            "id": "Plymouth Rock Joe",
            "group": 1
        },
        {
            "id": "Immanuel Ehrenhardt",
            "group": 1
        },
        {
            "id": "Samuel Gardner",
            "group": 1
        },
        {
            "id": "Dow Kritt",
            "group": 1
        },
        {
            "id": "William Jones",
            "group": 1
        },
        {
            "id": "William Goode",
            "group": 1
        },
        {
            "id": "J. Milton Miles",
            "group": 1
        },
        {
            "id": "Faith Matheny",
            "group": 1
        },
        {
            "id": "Scholfield Huxley",
            "group": 1
        },
        {
            "id": "Willie Metcalf",
            "group": 1
        },
        {
            "id": "Willie Pennington",
            "group": 1
        },
        {
            "id": "The Village Atheist",
            "group": 1
        },
        {
            "id": "John Ballard",
            "group": 1
        },
        {
            "id": "Julain Scott",
            "group": 1
        },
        {
            "id": "Alphonso Churchill",
            "group": 1
        },
        {
            "id": "Zilph Marsh",
            "group": 1
        },
        {
            "id": "James Garber",
            "group": 1
        },
        {
            "id": "Lydia Humphrey",
            "group": 1
        },
        {
            "id": "Le Roy Goldman",
            "group": 16
        },
        {
            "id": "Gustav Goldman",
            "group": 16
        },
        {
            "id": "Arlo Will",
            "group": 1
        },
        {
            "id": "Captain Orlando Killion",
            "group": 1
        },
        {
            "id": "Jeremy Carlisle",
            "group": 1
        },
        {
            "id": "Joseph Dixon",
            "group": 1
        },
        {
            "id": "Judson Stoddard",
            "group": 1
        },
        {
            "id": "Russell Kinkaird",
            "group": 1
        },
        {
            "id": "Aaron Hatfield",
            "group": 1
        },
        {
            "id": "Isaiah Beetoven",
            "group": 1
        },
        {
            "id": "Elijah Browning",
            "group": 1
        },
        {
            "id": "Webster Ford",
            "group": 1
        }
    ],
    "links": [
        { "source": "Ollie McGee", "target": "Fletcher McGee", "value": 1 },
        { "source": "Fletcher McGee", "target": "Ollie McGee", "value": 1 },
        { "source": "Chase Henry", "target": "Edith Conant", "value": 1 },
        { "source": "Harry Carey Goodhue", "target": "Chase Henry", "value": 1 },
        { "source": "Judge Somers", "target": "Chase Henry", "value": 1 },
        { "source": "Kinsey Keene", "target": "Thomas Rhodes", "value": 1 },
        { "source": "Kinsey Keene", "target": "Rev. Abner Peet", "value": 1 },
        { "source": "Kinsey Keene", "target": "A.D. Blood", "value": 1 },
        { "source": "Benjamin Pantier", "target": "Mrs. Benjamin Pantier", "value": 1 },
        { "source": "Benjamin Pantier", "target": "Reuben Pantier", "value": 1 },
        { "source": "Mrs. Benjamin Pantier", "target": "Reuben Pantier", "value": 1 },
        { "source": "Mrs. Benjamin Pantier", "target": "Benjamin Pantier", "value": 1 },
        { "source": "Reuben Pantier", "target": "Emily Sparks", "value": 1 },
        { "source": "Emily Sparks", "target": "Reuben Pantier", "value": 1 },
        { "source": "Emily Sparks", "target": "Barry Holden", "value": 1 },
        { "source": "Trainor the Druggist", "target": "Benjamin Pantier", "value": 1 },
        { "source": "Trainor the Druggist", "target": "Mrs. Benjamin Pantier", "value": 1 },
        { "source": "Trainor the Druggist", "target": "Reuben Pantier", "value": 1 },
        { "source": "Daisy Fraser", "target": "The Circuit Judge", "value": 1 },
        { "source": "Daisy Fraser", "target": "Rev. Abner Peet", "value": 1 },
        { "source": "Daisy Fraser", "target": "Amos Sibley", "value": 1 },
        { "source": "Daisy Fraser", "target": "Jeduthan Hawley", "value": 1 },
        { "source": "Benjamin Fraser", "target": "Benjamin Pantier", "value": 1 },
        { "source": "Benjamin Fraser", "target": "Daisy Fraser", "value": 1 },
        { "source": "Minerva Jones", "target": "“Butch” Weldy", "value": 1 },
        { "source": "Minerva Jones", "target": "Doc Myers", "value": 1 },
        { "source": "Minerva Jones", "target": "Doc Myers", "value": 1 },
        { "source": "“Indignation” Jones", "target": "Minerva Jones", "value": 1 },
        { "source": "Doc Myers", "target": "Doc Hill", "value": 1 },
        { "source": "Doc Myers", "target": "Minerva Jones", "value": 1 },
        { "source": "Doc Myers", "target": "Mrs. Meyers", "value": 1 },
        { "source": "Mrs. Meyers", "target": "Doc Myers", "value": 1 },
        { "source": "“Butch” Weldy", "target": "Thomas Rhodes", "value": 1 },
        { "source": "“Butch” Weldy", "target": "The Circuit Judge", "value": 1 },
        { "source": "“Butch” Weldy", "target": "Blind Jack", "value": 1 },
        { "source": "Knowlt Hoheimer", "target": "Justice Arnett", "value": 1 },
        { "source": "Lydia Puckett", "target": "Knowlt Hoheimer", "value": 1 },
        { "source": "Lydia Puckett", "target": "Lucius Atherton", "value": 1 },
        { "source": "Percy Bysshe Shelley", "target": "Bert Kessler", "value": 1 },
        { "source": "Flossie Cabanis", "target": "Thomas Rhodes", "value": 1 },
        { "source": "Flossie Cabanis", "target": "Jefferson Howard", "value": 1 },
        { "source": "Flossie Cabanis", "target": "Frank Drummer", "value": 1 },
        { "source": "The Town Marshall", "target": "Deacon Taylor", "value": 1 },
        { "source": "The Town Marshall", "target": "Jack McGuire", "value": 1 },
        { "source": "Jack McGuire", "target": "The Town Marshall", "value": 1 },
        { "source": "Dorcas Gustine", "target": "Faith Matheny", "value": 1 },
        { "source": "Margaret Fuller Slack", "target": "Penniwit, the Artist", "value": 1 },
        { "source": "George Trimble", "target": "Willie Metcalf", "value": 1 },
        { "source": "Lois Spears", "target": "Willard Fluke", "value": 1 },
        { "source": "Justice Arnett", "target": "“Butch” Weldy", "value": 1 },
        { "source": "Willard Fluke", "target": "Lois Spears", "value": 1 },
        { "source": "Aner Clute", "target": "Lucius Atherton", "value": 1 },
        { "source": "Homer Clapp", "target": "Aner Clute", "value": 1 },
        { "source": "Homer Clapp", "target": "Lucius Atherton", "value": 1 },
        { "source": "Deacon Taylor", "target": "Trainor the Druggist", "value": 1 },
        { "source": "Fiddler Jones", "target": "Cooney Potter", "value": 1 },
        { "source": "Louise Smith", "target": "Herbert Marshall", "value": 1 },
        { "source": "Herbert Marshall", "target": "Louise Smith", "value": 1 },
        { "source": "Sexsmith the Dentist", "target": "Daisy Fraser", "value": 1 },
        { "source": "Sexsmith the Dentist", "target": "Thomas Rhodes", "value": 1 },
        { "source": "A.D. Blood", "target": "Daisy Fraser", "value": 1 },
        { "source": "A.D. Blood", "target": "Justice Arnett", "value": 1 },
        { "source": "A.D. Blood", "target": "Dora Williams", "value": 1 },
        { "source": "A.D. Blood", "target": "Reuben Pantier", "value": 1 },
        { "source": "Robert Southey Burke", "target": "A.D. Blood", "value": 1 },
        { "source": "Dora Williams", "target": "Reuben Pantier", "value": 1 },
        { "source": "Mrs. Williams", "target": "Dora Williams", "value": 1 },
        { "source": "The Circuit Judge", "target": "Hod Putt", "value": 1 },
        { "source": "Blind Jack", "target": "“Butch” Weldy", "value": 1 },
        { "source": "Blind Jack", "target": "Jack McGuire", "value": 1 },
        { "source": "Nancy Knapp", "target": "Barry Holden", "value": 1 },
        { "source": "Barry Holden", "target": "Nancy Knapp", "value": 1 },
        { "source": "Barry Holden", "target": "Thomas Rhodes", "value": 1 },
        { "source": "State's Attorney Fallas", "target": "Barry Holden", "value": 1 },
        { "source": "Wendell P. Boyd", "target": "Daisy Fraser", "value": 1 },
        { "source": "Francis Turner", "target": "Carl Hamblin", "value": 1 },
        { "source": "Isa Nutter", "target": "Doc Meyers", "value": 1 },
        { "source": "Isa Nutter", "target": "Doc Hill", "value": 1 },
        { "source": "Mrs. Charles Bliss", "target": "Rev. Lemuel Wiley", "value": 1 },
        { "source": "Mrs. Charles Bliss", "target": "Judge Somers", "value": 1 },
        { "source": "Mrs. George Reece", "target": "Thomas Rhodes", "value": 1 },
        { "source": "Jefferson Howard", "target": "John Cabanis", "value": 1 },
        { "source": "Judge Selah Lively", "target": "Thomas Rhodes", "value": 1 },
        { "source": "Judge Selah Lively", "target": "Jefferson Howard", "value": 1 },
        { "source": "Judge Selah Lively", "target": "Kinsey Keene", "value": 1 },
        { "source": "Judge Selah Lively", "target": "Harmon Whitney", "value": 1 },
        { "source": "Albert Schirding", "target": "Jonas Keene", "value": 1 },
        { "source": "Jonas Keene", "target": "Albert Schirding", "value": 1 },
        { "source": "Washington McNeely", "target": "Paul McNeely", "value": 1 },
        { "source": "Washington McNeely", "target": "Mary McNeely", "value": 1 },
        { "source": "Paul McNeely", "target": "Washington McNeely", "value": 1 },
        { "source": "Paul McNeely", "target": "Mary McNeely", "value": 1 },
        { "source": "Mary McNeely", "target": "Paul McNeely", "value": 1 },
        { "source": "Mary McNeely", "target": "Washington McNeely", "value": 1 },
        { "source": "Daniel M'Cumber", "target": "Mary McNeely", "value": 1 },
        { "source": "Daniel M'Cumber", "target": "Georgine Sand Miner", "value": 1 },
        { "source": "Georgine Sand Miner", "target": "Daniel M'Cumber", "value": 1 },
        { "source": "Thomas Rhodes", "target": "Margaret Fuller Slack", "value": 1 },
        { "source": "Thomas Rhodes", "target": "Petit, the Poet", "value": 1 },
        { "source": "Ida Chicken", "target": "Thomas Rhodes", "value": 1 },
        { "source": "Penniwit, the Artisit", "target": "Judge Somers", "value": 1 },
        { "source": "Jim Brown", "target": "Rev. Abner Peet", "value": 1 },
        { "source": "Jim Brown", "target": "Benjamin Pantier", "value": 1 },
        { "source": "Jim Brown", "target": "Washington McNeely", "value": 1 },
        { "source": "Jim Brown", "target": "A.D. Blood", "value": 1 },
        { "source": "Jim Brown", "target": "Fiddler Jones", "value": 1 },
        { "source": "Elsa Wetman", "target": "Hamilton Greene", "value": 1 },
        { "source": "Hamilton Greene", "target": "Elsa Wertman", "value": 1 },
        { "source": "Ernest Hyde", "target": "Robert Heston", "value": 1 },
        { "source": "Amos Sibley", "target": "Mrs. Sibley", "value": 1 },
        { "source": "Mrs. Sibley", "target": "Amos Sibley", "value": 1 },
        { "source": "Adam Weirauch", "target": "Editor Whedon", "value": 1 },
        { "source": "John Hancock Otis", "target": "Anthony Findlay", "value": 1 },
        { "source": "John Cabanis", "target": "Thomas Rhodes", "value": 1 },
        { "source": "John Cabanis", "target": "A.D. Blood", "value": 1 },
        { "source": "The Unknown", "target": "Aaron Hatfield", "value": 1 },
        { "source": "Jonathan Swift Somers", "target": "Willie Metcalf", "value": 1 },
        { "source": "Widow McFarlane", "target": "Thomas Rhodes", "value": 1 },
        { "source": "Carl Hamblin", "target": "Francis Turner", "value": 1 },
        { "source": "Editor Whedon", "target": "Fiddler Jones", "value": 1 },
        { "source": "Eugene Carman", "target": "Thomas Rhodes", "value": 1 },
        { "source": "Eugene Carman", "target": "Rev Abner Peet", "value": 1 },
        { "source": "Clarence Fawcett", "target": "Eugene Carman", "value": 1 },
    ]
}

export default class IndexPage extends Component {
    render() {
        return (
            <main style={{
                backgroundColor: `#fff`,
                color: `#000`
            }}>
                <h1>Relationship Web</h1>
                <ForceGraph2D
                    graphData={data}
                    nodeAutoColorBy="group"
                    linkColor={() => 'rgba(7, 60, 83, 1)'}
                    nodeCanvasObject={(node, ctx, globalScale) => {
                        const label = node.id;
                        const fontSize = 16 / globalScale;
                        ctx.font = `${fontSize}px Sans-Serif`;
                        const textWidth = ctx.measureText(label).width;
                        const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

                        ctx.fillStyle = 'rgba(7, 60, 83, .05)';
                        ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillStyle = node.color;
                        ctx.fillText(label, node.x, node.y);
                    }}
                />
            </main>
        )
    }
}