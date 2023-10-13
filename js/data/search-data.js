// Dummy data for the search js
const dummyData = [
    {
        "eircode": "D08VW25",
        "rating": "4.1",
        "reviewCount": "4",
        "commentCount": "4",
        "address": "61 Cork street, Apartment 22"
    },
    {
        "eircode": "D07SB33",
        "rating": "4.1",
        "reviewCount": "4",
        "commentCount": "4",
        "address": "9 Thongs avenue, Apartment 37"
    },
    {
        "eircode": "D07ZE41",
        "rating": "4.0",
        "reviewCount": "2",
        "commentCount": "3",
        "address": "97 Artifact drive, Apartment 26"
    },
    {
        "eircode": "D03DI39",
        "rating": "4.9",
        "reviewCount": "1",
        "commentCount": "3",
        "address": "200 Disruption avenue, Apartment 20"
    },
    {
        "eircode": "D04TT75",
        "rating": "4.7",
        "reviewCount": "4",
        "commentCount": "7",
        "address": "93 Motor street, Apartment 28"
    },
    {
        "eircode": "D07ZT88",
        "rating": "4.2",
        "reviewCount": "6",
        "commentCount": "5",
        "address": "6 Communion avenue, Apartment 43"
    },
    {
        "eircode": "D04UE09",
        "rating": "4.4",
        "reviewCount": "2",
        "commentCount": "1",
        "address": "103 Heartbeat close, Apartment 47"
    },
    {
        "eircode": "D03WS34",
        "rating": "4.7",
        "reviewCount": "1",
        "commentCount": "5",
        "address": "45 Exclamation crescent, Apartment 42"
    },
    {
        "eircode": "D06CB06",
        "rating": "4.1",
        "reviewCount": "8",
        "commentCount": "10",
        "address": "194 Flint drive, Apartment 44"
    },
    {
        "eircode": "D04KG98",
        "rating": "4.9",
        "reviewCount": "7",
        "commentCount": "4",
        "address": "183 Destiny overview avenue, Apartment 46"
    },
    {
        "eircode": "D04FC84",
        "rating": "4.6",
        "reviewCount": "4",
        "commentCount": "6",
        "address": "64 Prosecution avenue, Apartment 33"
    },
    {
        "eircode": "D07KZ36",
        "rating": "4.7",
        "reviewCount": "10",
        "commentCount": "8",
        "address": "3 Lyrics crescent, Apartment 25"
    },
    {
        "eircode": "D03UJ47",
        "rating": "4.3",
        "reviewCount": "4",
        "commentCount": "10",
        "address": "74 Dynamo avenue, Apartment 20"
    },
    {
        "eircode": "D04NC99",
        "rating": "4.7",
        "reviewCount": "2",
        "commentCount": "7",
        "address": "144 Mallet drive, Apartment 49"
    },
    {
        "eircode": "D08SA31",
        "rating": "4.9",
        "reviewCount": "3",
        "commentCount": "5",
        "address": "38 Synthesis hypothermia crescent, Apartment 22"
    },
    {
        "eircode": "D09PA27",
        "rating": "4.7",
        "reviewCount": "4",
        "commentCount": "6",
        "address": "33 Deduce crescent, Apartment 46"
    },
    {
        "eircode": "D08SM30",
        "rating": "4.1",
        "reviewCount": "5",
        "commentCount": "9",
        "address": "19 President carbohydrate crescent, Apartment 33"
    },
    {
        "eircode": "D08ZG59",
        "rating": "4.9",
        "reviewCount": "2",
        "commentCount": "1",
        "address": "57 Snail veto close, Apartment 21"
    },
    {
        "eircode": "D09BB23",
        "rating": "4.4",
        "reviewCount": "6",
        "commentCount": "6",
        "address": "108 Meatloaf street, Apartment 50"
    },
    {
        "eircode": "D03IV35",
        "rating": "4.0",
        "reviewCount": "5",
        "commentCount": "7",
        "address": "154 Tuber close, Apartment 42"
    },
    {
        "eircode": "D01KZ30",
        "rating": "4.2",
        "reviewCount": "1",
        "commentCount": "1",
        "address": "197 Ideology salad close, Apartment 6"
    },
    {
        "eircode": "D09CY10",
        "rating": "4.0",
        "reviewCount": "8",
        "commentCount": "2",
        "address": "17 Validate avenue, Apartment 11"
    },
    {
        "eircode": "D02AQ41",
        "rating": "4.1",
        "reviewCount": "9",
        "commentCount": "6",
        "address": "134 Patron close, Apartment 17"
    },
    {
        "eircode": "D02PH21",
        "rating": "4.7",
        "reviewCount": "3",
        "commentCount": "1",
        "address": "177 Attendant crescent, Apartment 27"
    },
    {
        "eircode": "D02MW77",
        "rating": "4.1",
        "reviewCount": "3",
        "commentCount": "6",
        "address": "51 Visitor drive, Apartment 34"
    },
    {
        "eircode": "D09EK67",
        "rating": "4.5",
        "reviewCount": "6",
        "commentCount": "9",
        "address": "6 Finisher shofar drive, Apartment 38"
    },
    {
        "eircode": "D07RA78",
        "rating": "4.3",
        "reviewCount": "7",
        "commentCount": "4",
        "address": "136 Warlock drive, Apartment 14"
    },
    {
        "eircode": "D09BN52",
        "rating": "4.1",
        "reviewCount": "3",
        "commentCount": "6",
        "address": "100 Semicircle close, Apartment 41"
    },
    {
        "eircode": "D05MX23",
        "rating": "4.6",
        "reviewCount": "4",
        "commentCount": "2",
        "address": "156 Lie avenue, Apartment 28"
    },
    {
        "eircode": "D02UT04",
        "rating": "4.4",
        "reviewCount": "9",
        "commentCount": "5",
        "address": "158 Foxglove mentor drive, Apartment 50"
    },
    {
        "eircode": "D05KM91",
        "rating": "4.2",
        "reviewCount": "9",
        "commentCount": "6",
        "address": "17 Suitcase street, Apartment 33"
    },
    {
        "eircode": "D09SZ45",
        "rating": "5.0",
        "reviewCount": "7",
        "commentCount": "1",
        "address": "45 Siding drive, Apartment 6"
    },
    {
        "eircode": "D05CV68",
        "rating": "4.6",
        "reviewCount": "7",
        "commentCount": "9",
        "address": "37 Cross close, Apartment 38"
    },
    {
        "eircode": "D01XY56",
        "rating": "4.4",
        "reviewCount": "1",
        "commentCount": "3",
        "address": "153 Adverb breeze street, Apartment 23"
    },
    {
        "eircode": "D09TP90",
        "rating": "4.7",
        "reviewCount": "5",
        "commentCount": "4",
        "address": "60 Tour avenue, Apartment 26"
    },
    {
        "eircode": "D01GZ38",
        "rating": "4.3",
        "reviewCount": "8",
        "commentCount": "8",
        "address": "193 Setback drive, Apartment 27"
    },
    {
        "eircode": "D09SR64",
        "rating": "4.5",
        "reviewCount": "10",
        "commentCount": "8",
        "address": "69 Encouragement avenue, Apartment 9"
    },
    {
        "eircode": "D06TI74",
        "rating": "4.1",
        "reviewCount": "10",
        "commentCount": "1",
        "address": "4 Mezzanine avenue, Apartment 39"
    },
    {
        "eircode": "D08KC03",
        "rating": "4.3",
        "reviewCount": "8",
        "commentCount": "1",
        "address": "42 Destruction avenue, Apartment 5"
    },
    {
        "eircode": "D04JN15",
        "rating": "4.9",
        "reviewCount": "5",
        "commentCount": "5",
        "address": "7 Limitation decision-making crescent, Apartment 21"
    },
    {
        "eircode": "D02WS36",
        "rating": "4.5",
        "reviewCount": "5",
        "commentCount": "9",
        "address": "72 Tintype street, Apartment 15"
    },
    {
        "eircode": "D06ZL36",
        "rating": "4.6",
        "reviewCount": "9",
        "commentCount": "8",
        "address": "108 Divorce crescent, Apartment 32"
    },
    {
        "eircode": "D06UU42",
        "rating": "5.0",
        "reviewCount": "8",
        "commentCount": "5",
        "address": "151 Retirement close, Apartment 29"
    },
    {
        "eircode": "D03BZ79",
        "rating": "4.8",
        "reviewCount": "7",
        "commentCount": "2",
        "address": "194 Macaw crescent, Apartment 39"
    },
    {
        "eircode": "D04IP25",
        "rating": "5.0",
        "reviewCount": "7",
        "commentCount": "5",
        "address": "18 Intervenor close, Apartment 12"
    },
    {
        "eircode": "D06KT42",
        "rating": "4.5",
        "reviewCount": "3",
        "commentCount": "8",
        "address": "193 People avenue, Apartment 16"
    },
    {
        "eircode": "D06MG30",
        "rating": "4.3",
        "reviewCount": "4",
        "commentCount": "8",
        "address": "2 Fall close, Apartment 2"
    },
    {
        "eircode": "D02BU77",
        "rating": "4.9",
        "reviewCount": "6",
        "commentCount": "9",
        "address": "165 Supermarket drive, Apartment 4"
    },
    {
        "eircode": "D06YU21",
        "rating": "4.1",
        "reviewCount": "2",
        "commentCount": "1",
        "address": "119 Monitoring avenue, Apartment 2"
    },
    {
        "eircode": "D09JG15",
        "rating": "4.0",
        "reviewCount": "4",
        "commentCount": "8",
        "address": "72 Joint close, Apartment 15"
    },
    {
        "eircode": "D04XM75",
        "rating": "4.9",
        "reviewCount": "10",
        "commentCount": "4",
        "address": "119 Parenthesis crescent, Apartment 50"
    },
    {
        "eircode": "D07DW34",
        "rating": "4.0",
        "reviewCount": "10",
        "commentCount": "7",
        "address": "123 Kitsch drive, Apartment 44"
    },
    {
        "eircode": "D03PN30",
        "rating": "4.2",
        "reviewCount": "7",
        "commentCount": "10",
        "address": "104 Crib avenue, Apartment 3"
    },
    {
        "eircode": "D09JI36",
        "rating": "4.9",
        "reviewCount": "8",
        "commentCount": "3",
        "address": "8 Vote crescent, Apartment 43"
    },
    {
        "eircode": "D04CB70",
        "rating": "4.4",
        "reviewCount": "1",
        "commentCount": "2",
        "address": "143 Batting crescent, Apartment 26"
    },
    {
        "eircode": "D04YV95",
        "rating": "4.9",
        "reviewCount": "5",
        "commentCount": "8",
        "address": "153 Bosom crescent, Apartment 45"
    },
    {
        "eircode": "D06HM96",
        "rating": "4.7",
        "reviewCount": "6",
        "commentCount": "3",
        "address": "131 Yak close, Apartment 6"
    },
    {
        "eircode": "D05QB70",
        "rating": "4.7",
        "reviewCount": "7",
        "commentCount": "6",
        "address": "27 Inequality close, Apartment 10"
    },
    {
        "eircode": "D01BO83",
        "rating": "4.1",
        "reviewCount": "10",
        "commentCount": "3",
        "address": "161 Ashram drive, Apartment 31"
    },
    {
        "eircode": "D07GR47",
        "rating": "5.0",
        "reviewCount": "7",
        "commentCount": "8",
        "address": "130 Crash crescent, Apartment 20"
    },
    {
        "eircode": "D02HB33",
        "rating": "4.7",
        "reviewCount": "5",
        "commentCount": "8",
        "address": "157 Permafrost crescent, Apartment 48"
    },
    {
        "eircode": "D07WM52",
        "rating": "4.4",
        "reviewCount": "7",
        "commentCount": "10",
        "address": "47 Pantsuit crescent, Apartment 50"
    },
    {
        "eircode": "D05OE83",
        "rating": "4.6",
        "reviewCount": "7",
        "commentCount": "6",
        "address": "51 Airplane close, Apartment 17"
    },
    {
        "eircode": "D09UC42",
        "rating": "4.3",
        "reviewCount": "4",
        "commentCount": "7",
        "address": "35 Berry close, Apartment 49"
    },
    {
        "eircode": "D07QE36",
        "rating": "4.5",
        "reviewCount": "1",
        "commentCount": "7",
        "address": "162 Rhetoric drive, Apartment 28"
    },
    {
        "eircode": "D09YL33",
        "rating": "4.3",
        "reviewCount": "9",
        "commentCount": "7",
        "address": "198 Ancestor drive, Apartment 7"
    },
    {
        "eircode": "D08AJ71",
        "rating": "5.0",
        "reviewCount": "10",
        "commentCount": "3",
        "address": "84 Soybean drive, Apartment 7"
    },
    {
        "eircode": "D04ZR26",
        "rating": "4.6",
        "reviewCount": "8",
        "commentCount": "10",
        "address": "109 Coin run drive, Apartment 2"
    },
    {
        "eircode": "D08KL59",
        "rating": "4.8",
        "reviewCount": "9",
        "commentCount": "4",
        "address": "2 Wasabi street, Apartment 42"
    },
    {
        "eircode": "D09UU65",
        "rating": "4.7",
        "reviewCount": "8",
        "commentCount": "1",
        "address": "9 Fry abrogation crescent, Apartment 16"
    },
    {
        "eircode": "D01XM06",
        "rating": "4.2",
        "reviewCount": "1",
        "commentCount": "1",
        "address": "19 Instance street, Apartment 37"
    },
    {
        "eircode": "D06TN17",
        "rating": "4.1",
        "reviewCount": "9",
        "commentCount": "3",
        "address": "66 Flicker couch street, Apartment 21"
    },
    {
        "eircode": "D08YE26",
        "rating": "4.5",
        "reviewCount": "3",
        "commentCount": "10",
        "address": "136 Minority street, Apartment 6"
    },
    {
        "eircode": "D06YJ35",
        "rating": "4.9",
        "reviewCount": "7",
        "commentCount": "9",
        "address": "118 Zen street, Apartment 12"
    },
    {
        "eircode": "D07PP05",
        "rating": "4.1",
        "reviewCount": "7",
        "commentCount": "10",
        "address": "29 Shopping avenue, Apartment 13"
    },
    {
        "eircode": "D06AJ05",
        "rating": "4.4",
        "reviewCount": "3",
        "commentCount": "3",
        "address": "1 Decryption avenue, Apartment 30"
    },
    {
        "eircode": "D02CN30",
        "rating": "4.2",
        "reviewCount": "3",
        "commentCount": "7",
        "address": "55 Inspection nutrient drive, Apartment 12"
    },
    {
        "eircode": "D04QM61",
        "rating": "4.9",
        "reviewCount": "3",
        "commentCount": "4",
        "address": "22 Buffalo street, Apartment 19"
    },
    {
        "eircode": "D05OE00",
        "rating": "4.4",
        "reviewCount": "6",
        "commentCount": "1",
        "address": "128 Signature inhabitant avenue, Apartment 50"
    },
    {
        "eircode": "D05PB51",
        "rating": "5.0",
        "reviewCount": "2",
        "commentCount": "9",
        "address": "72 Ballot drive, Apartment 26"
    },
    {
        "eircode": "D03JT12",
        "rating": "4.1",
        "reviewCount": "1",
        "commentCount": "5",
        "address": "120 Scissors drive, Apartment 37"
    },
    {
        "eircode": "D03DW51",
        "rating": "4.7",
        "reviewCount": "1",
        "commentCount": "9",
        "address": "159 Salt avenue, Apartment 36"
    },
    {
        "eircode": "D03CU92",
        "rating": "4.5",
        "reviewCount": "3",
        "commentCount": "7",
        "address": "105 Boost drive, Apartment 2"
    },
    {
        "eircode": "D05ZO25",
        "rating": "4.4",
        "reviewCount": "5",
        "commentCount": "7",
        "address": "31 Cat crime avenue, Apartment 31"
    },
    {
        "eircode": "D09JO61",
        "rating": "4.3",
        "reviewCount": "10",
        "commentCount": "6",
        "address": "6 Lap street, Apartment 3"
    },
    {
        "eircode": "D02SV00",
        "rating": "4.5",
        "reviewCount": "9",
        "commentCount": "6",
        "address": "139 Sculpture vote drive, Apartment 1"
    },
    {
        "eircode": "D01BH01",
        "rating": "4.6",
        "reviewCount": "2",
        "commentCount": "5",
        "address": "70 Assistant drive, Apartment 9"
    },
    {
        "eircode": "D07NK97",
        "rating": "4.4",
        "reviewCount": "7",
        "commentCount": "6",
        "address": "19 Garbage close, Apartment 24"
    },
    {
        "eircode": "D05II32",
        "rating": "4.5",
        "reviewCount": "2",
        "commentCount": "5",
        "address": "64 Blogger sanctity drive, Apartment 28"
    },
    {
        "eircode": "D05IS51",
        "rating": "4.6",
        "reviewCount": "9",
        "commentCount": "2",
        "address": "62 Destruction street, Apartment 39"
    },
    {
        "eircode": "D02YU90",
        "rating": "4.4",
        "reviewCount": "8",
        "commentCount": "6",
        "address": "178 Availability drive, Apartment 8"
    },
    {
        "eircode": "D04UL38",
        "rating": "4.6",
        "reviewCount": "6",
        "commentCount": "10",
        "address": "54 Columnist close, Apartment 46"
    },
    {
        "eircode": "D03YY99",
        "rating": "5.0",
        "reviewCount": "1",
        "commentCount": "8",
        "address": "148 Enzyme dream avenue, Apartment 25"
    },
    {
        "eircode": "D03OR69",
        "rating": "4.1",
        "reviewCount": "9",
        "commentCount": "7",
        "address": "121 Beauty class crescent, Apartment 25"
    },
    {
        "eircode": "D01DS05",
        "rating": "4.6",
        "reviewCount": "1",
        "commentCount": "2",
        "address": "178 Tooth crescent, Apartment 34"
    },
    {
        "eircode": "D07AZ79",
        "rating": "5.0",
        "reviewCount": "6",
        "commentCount": "2",
        "address": "153 Transom drive, Apartment 30"
    },
    {
        "eircode": "D03QI47",
        "rating": "4.5",
        "reviewCount": "9",
        "commentCount": "2",
        "address": "3 Midnight crescent, Apartment 46"
    },
    {
        "eircode": "D09SR53",
        "rating": "4.1",
        "reviewCount": "9",
        "commentCount": "7",
        "address": "43 Thigh lounge crescent, Apartment 44"
    },
    {
        "eircode": "D05BS89",
        "rating": "4.5",
        "reviewCount": "2",
        "commentCount": "5",
        "address": "168 Color close, Apartment 19"
    },
    {
        "eircode": "D04TQ96",
        "rating": "4.9",
        "reviewCount": "7",
        "commentCount": "3",
        "address": "78 Ejector close, Apartment 40"
    },
    {
        "eircode": "D01ST70",
        "rating": "4.5",
        "reviewCount": "4",
        "commentCount": "3",
        "address": "107 Guide crescent, Apartment 35"
    }
]