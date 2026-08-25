let _id = 1
function id() { return `book-${String(_id++).padStart(4, '0')}` }
const now = new Date().toISOString()

export type BookRecord = {
  id: string
  title: string
  size: string
  isbn: string
  author: string
  genre: string
  layoutDesigner: string
  collaboratorArtist: string
  description: string
  coverImageUrl: string
  publication: string
  hasSpotUV: boolean
  hasMatteLamination: boolean
  hasFoilEmboss: boolean
  isBestSeller: boolean
  isAwardWinner: boolean
  awardName: string
  purchaseLink: string
  createdAt: string
  updatedAt: string
}

function b(
  pub: string,
  title: string,
  isbn: string,
  author: string,
  genre: string,
  layoutDesigner = '',
  collaboratorArtist = '',
  coverImageUrl = ''
): BookRecord {
  // Use Open Library cover API as reference image if no custom cover provided
  const cover = coverImageUrl
    ? coverImageUrl
    : isbn
    ? `https://covers.openlibrary.org/b/isbn/${isbn.replace(/-/g, '')}-L.jpg`
    : ''
  return {
    id: id(), title, isbn, author, genre,
    size: '', layoutDesigner, collaboratorArtist,
    description: '', coverImageUrl: cover, publication: pub,
    hasSpotUV: false, hasMatteLamination: false, hasFoilEmboss: false,
    isBestSeller: false, isAwardWinner: false,
    awardName: '',
    purchaseLink: pub === 'fp' ? 'https://fineprint.com.np' : '',
    createdAt: now, updatedAt: now,
  }
}

/* ═══════════════════════════════════════════════════════
   BOOKHILL — 207 books
═══════════════════════════════════════════════════════ */
const BH: BookRecord[] = [
  b('bh','Pagal Basti','978-9937-928-08-3','Sarubhakta','Fiction (Novel)'),
  b('bh','British Samrajyaka Nepali Mohora','978-9937-931-23-6','Jhalak Subedi','Non-Fiction (History)'),
  b('bh','The Flipside of The British Empire','978-9937-934-21-3','Jhalak Subedi','Non-Fiction (History)'),
  b('bh','Devkota','978-9937-790-36-9','Padma Devkota','Non-Fiction (Biography)'),
  b('bh','Shilanyas','978-9937-931-20-5','Sujit Mainali','Non-Fiction (History)'),
  b('bh','Bath-Tub','978-9937-931-21-2','Kumar Nagarkoti','Fiction (Drama)'),
  b('bh','Aparajita: Parijatka Chithiharu','978-9937-921-76-3','Sukanya Waiba','Non-Fiction','Abinash Tamang'),
  b('bh','Nepal Nakhuleko Pato','978-9937-931-26-7','Dr. Tirthabahadur Shrestha','Non-Fiction'),
  b('bh','Ghanchakkar','978-9937-931-27-4','Sanjeev Uprety','Fiction (Novel)'),
  b('bh','Maidaro','978-9937-931-24-3','Bhupeen','Fiction (Novel)'),
  b('bh','Pretkalpa','978-9937-931-25-0','Narayan Dhakal','Fiction (Novel)'),
  b('bh','Hansa','978-9937-934-25-1','Sanjeev Uprety','Fiction (Novel)'),
  b('bh','Jeevan Kaada Ki Phool','978-9937-910-14-9','Jhamak Ghimire','Non-Fiction (Biography)'),
  b('bh','Shankar Lamichhane','978-9937-931-28-1','Shankar Lamichhane','Non-Fiction (Essay)'),
  b('bh','Loktantra ra Aajako Marxwad','978-9937-934-20-6','Chaitanya Mishra','Non-Fiction (Essay)'),
  b('bh','Asahamati','978-9937-857-66-6','Saurav','Non-Fiction (Essay)'),
  b('bh','Naaso','978-9937-934-27-5','Guru Prasad Mainali','Fiction (Story)'),
  b('bh','Nepalko Sambidhan','','',''),
  b('bh','Timri Swasni Ra Ma','978-9993-324-26-3','Manu Brajaki','Fiction (Novel)'),
  b('bh','Pratigandha','978-9937-934-28-2','Sarubhakta','Fiction (Novel)'),
  b('bh','Ghintang Ghisi Twak','978-9937-934-22-0','Rupesh Shrestha','Fiction (Poetry)'),
  b('bh','Manto','978-8184-001-44-0',"Sa'adat Hasan Manto",'Fiction (Literature)'),
  b('bh','Muluki Ain','','',''),
  b('bh','Uhileko Nepal','978-9937-934-29-9','Bhairav Risal','Non-Fiction'),
  b('bh','Vimukti','978-9937-935-14-2','Malla K. Sundar','Fiction (Novel)'),
  b('bh','Ek Haatko Taali','978-9937-753-14-2','Yubaraj Nayaghare','Fiction (Novel)'),
  b('bh','Parkhal Lagayepachi Dherai Thok Bahira Parchha','978-9937-753-03-6','Basu Shashi','Fiction (Poetry)'),
  b('bh','Mann','978-9937-941-41-9','Leeladhwaj Thapa','Fiction (Novel)'),
  b('bh','Nepali Lokkatha','978-9937-935-17-3','Tulasi Diwasa','Fiction (Folk Stories)'),
  b('bh','Tamas','978-9937-935-12-8','Narayan Dhakal','Fiction (Stories)'),
  b('bh','Eklavya ko Debre Haat','978-9937-935-13-5','Giri Shrees Magar','Fiction (Poetry)'),
  b('bh','Kalpa-Grantha','978-9937-935-11-1','Kumar Nagarkoti','Fiction (Stories)'),
  b('bh','Khagendra Sangraula','978-9937-950-04-6','Ujjwal Prasai','Non Fiction (Biography)'),
  b('bh','Aksharganj','978-9937-753-29-6','Kumar Nagarkoti','Fiction (Novel)'),
  b('bh','Parisscano','978-9937-935-15-9','Niru Tripathi','Fiction (Novel)'),
  b('bh','Siddhantaka Kura','978-9937-941-48-8','Sanjeev Uprety','Non-Fiction (Essay)'),
  b('bh','Musha Manush','','John Steinbeck, Translated by Ganess Paudel','Fiction (Novel)'),
  b('bh','Rinpoche','','',''),
  b('bh','Antarmanko Yatra','978-9937-935-16-6','Jagadish Ghimire','Non-Fiction (Biography)'),
  b('bh','Pratek Thau Pratek Manche','978-9937-804-66-0','Peter J Karthak','Fiction (Novel)'),
  b('bh','Satta ra Satya','978-9937-941-42-6','Khagendra Sangroula','Non Fiction (Essays)'),
  b('bh','Mithya','978-9937-753-09-8','Deepak Parajuli','Fiction (Novel)'),
  b('bh','Galli Sansar','978-9937-753-72-2','Roshan Sherchan','Non-Fiction (Essay)'),
  b('bh','Madhavi','978-9937-753-01-2','Madan Mani Dixit','Fiction (Novel)'),
  b('bh','Yuganta','978-9937-793-51-8','Irawati Karve, Translated by Sujit Mainali','Non-Fiction (Essay)'),
  b('bh','Damanraj Tuladhar','978-9937-935-19-7','Damanraj Tuladhar','Non-Fiction (Memoir)'),
  b('bh','Narayan Gopal','978-9937-167-42-0','Prakash Sayami','Non-Fiction (Biography)'),
  b('bh','Metamorphosis','978-9937-941-45-7','Franz Kafka, Translated by Ramchandra KC','Fiction (Novel)'),
  b('bh','Aapa Kharpa','978-9937-753-00-5','Tirtha Gurung','Fiction (Novel)'),
  b('bh','Ghosts in the Bamboo','978-9937-941-44-0','Greta Rana','Fiction (Novel)'),
  b('bh','Pagalbasti 02','978-9937-928-08-3','Sarubhakta','Fiction (Novel)'),
  b('bh','Asahamati 02','978-9937-910-16-3','Saurav','Non-Fiction (Literature)'),
  b('bh','Ae Durka Sitara','978-9937-753-10-4','Kiran Kharel','Fiction (Poetry)'),
  b('bh','Mero Nau Dashak','978-9937-753-13-5','Surya Bahadur Thapa','Non-Fiction (Biography)'),
  b('bh','Agni','978-9937-753-06-7','Naba Raj Lamsal','Fiction (Poetry)'),
  b('bh','Paitala','978-9937-910-15-6','Ganess Paudel','Fiction (Novel)'),
  b('bh','Aayo Gorkhali','','Tim Gurung','Non-Fiction (Autobiography)'),
  b('bh','Mystica','978-9937-895-56-9','Kumar Nagarkoti','Fiction (Novel)'),
  b('bh','Aakashamukhi','978-9937-753-15-9','Translated by Mohan Mainali',''),
  b('bh','Indian Diplomacy in Nepal','978-9937-753-16-6','M.D. Dharamdasani','Non Fiction (History)'),
  b('bh','Samaya Trasadi','978-9937-753-18-0','Sarubhakta','Fiction (Novel)'),
  b('bh','MCC','','',''),
  b('bh','Adhunik Bharatiya Nepali Katha','978-9937-753-24-1','Abinash Shrestha','Fiction (Stories)'),
  b('bh','Kanchanjangha Juhaar','978-9937-753-27-2','Joseph Dalton Hooker, Translated by Hasta Gurung','Fiction (Essay)'),
  b('bh','Vishwo Aarthik Kranti','978-9937-753-23-4','Krishna Paudel','Non-Fiction (Essay)'),
  b('bh','Satyamohan','978-9937-753-21-0','Girish Giri','Non-Fiction (Biography)'),
  b('bh','Transit','','','Fiction (Drama)'),
  b('bh','Nepali Sangeet Durbar','','','Non-Fiction (History)'),
  b('bh','Ba-aama','978-9937-753-30-2','Ramlal Joshi','Fiction (Stories)'),
  b('bh','Devika','','Devika Bandana','Biography'),
  b('bh','Mastiska ko','9789937990691','',''),
  b('bh','7.0 Dashmalab','','',''),
  b('bh','Khagendra Lamichhaneka Natak','978-9937-753-31-9','Khagendra Lamichhane','Fiction (Drama)'),
  b('bh','Mantra','','',''),
  b('bh','Fulani','978-9937-910-10-1','Khagendra Lamichhane','Fiction (Novel)'),
  b('bh','Furke','978-9937-753-28-9','Khagendra Lamichhane','Fiction (Novel)'),
  b('bh','Karmana','978-9937-753-38-8','Jhamak Ghimire','Non Fiction (Essay)','','Abinash Tamang'),
  b('bh','Seto Siudoo','','','Fiction (Novel)'),
  b('bh','Samaya Sakshi','978-9937-753-33-3','Babita Basnet','Non Fiction (Memoirs)'),
  b('bh','Nepali Coin','','',''),
  b('bh','Parbat Parbatma Batuwa Gham','978-9937-753-34-0','Ramesh Kshitiz','Fiction (Poetry)'),
  b('bh','Arko Sanjh Parkhera Sanjhma','978-9937-753-35-7','Ramesh Kshitiz','Fiction (Poetry)'),
  b('bh','Dwarikadevi Thakurani','978-9937-753-17-3','Ratan Bhandari','Non-Fiction (Biography)','','Rasik Rai'),
  b('bh','Music Myth and Melody','','','Non Fiction (History)'),
  b('bh','Antar','978-9937-753-43-2','Ramesh Sayan','Fiction (Novel)','','Freepik'),
  b('bh','Bhagna Bhairav','978-9937-753-42-5','Prollaas Sindhuliya','Fiction (Novel)','','Shilpee Binod / Aryal Family'),
  b('bh','Chhuteka Anuhar','978-9937-753-44-9','Ramesh Sayan','Fiction (Novel)','','Freepik'),
  b('bh','Docha','978-9937-910-16-3','Kumar Nagarkoti','Non-Fiction (Memoir)'),
  b('bh','Sworna Katha','9789937982412','',''),
  b('bh','Vegeterian','978-9937-753-46-3','Han Kang, Translated by Prawin Adhikari','Fiction (Novel)'),
  b('bh','Asangati','','Saurav','Non-Fiction (Essay)'),
  b('bh','Manu','978-9937-753-45-6','Dr. Deviprasad Subedi','Fiction (Novel)'),
  b('bh','Jogiyana','978-9937-753-53-1','Kumar Nagarkoti','Non-Fiction (Memoir)'),
  b('bh','Dekheko Desh','978-9937-921-72-5','Mohan Mainali',''),
  b('bh','Prof Surya Subedi','978-9937-753-70-8','Bhagirath Yogi','Non-Fiction (Biography)'),
  b('bh','Bikalpa','978-9937-753-50-0',"Ram Karki 'Parth'",'Non-Fiction (Nepali)'),
  b('bh','Bhupinka Kabita','978-9937-753-57-9','Bhupeen','Fiction (Poetry)','','Freepik'),
  b('bh','Ghatmandu','978-9937-910-12-5','Kumar Nagarkoti','Fiction (Nepali)'),
  b('bh','Ghar Farki Raheko','978-9937-856-35-5','Ramesh Kshitiz','Fiction (Poetry)'),
  b('bh','Nepal ko Arthik','','',''),
  b('bh','Coma Bathtub','','',''),
  b('bh','Lahana ra teer','978-9937-753-60-9','Avaya Shrestha','Fiction (Poetry, Drama, Literature)'),
  b('bh','Mahayug','','',''),
  b('bh','Meri Neelima','978-9937-895-51-4','Madan Mani Dixit','Fiction (Nepali)'),
  b('bh','Mukam Ranamaidan','978-9937-753-55-5','Mohan Mainali','Non-Fiction (History)'),
  b('bh','Aarogya Bigyan','9789937753661','Khaptad Baba','Non-Fiction (Religion)'),
  b('bh','Amrikane Kashi','978-9937-753-69-2','Sarala Gautam','Non-Fiction (Novel)'),
  b('bh','Kimino Girl','978-9937-753-58-6','Kumar Nagarkoti','Fiction (Stories)'),
  b('bh','The Himalayan Grill','','',''),
  b('bh','Khappar','978-9937-753-58-6','Kumar Nagarkoti','Fiction (Stories)'),
  b('bh','Aayu Choor','','Kumar Nagarkoti','Fiction (Novels)'),
  b('bh','Patan Ka Ciya','','',''),
  b('bh','Nijamati','','',''),
  b('bh','Gijubhai','','',''),
  b('bh','Bhaeka Kura','','',''),
  b('bh','Swasthya Bigyan','978-9937-753-05-0','Khaptad Baba','Non-Fiction (Nepali Health)'),
  b('bh','Vedanta Bigyan','','',''),
  b('bh','Asahamati 04','978-9937-753-82-1','Saurav','Non-Fiction (Essays)'),
  b('bh','Sawarni','978-9937-753-84-5','Dr. Shreedhar Khannal','Fiction (Nepali)'),
  b('bh','Company','','',''),
  b('bh','Khaptad combo','','',''),
  b('bh','Yeuta Mai Nagarma','978-9937-753-85-2','Ramesh Kshitiz','Fiction (Stories)'),
  b('bh','Depression','','',''),
  b('bh','THG','','',''),
  b('bh','Yakshini','','',''),
  b('bh','Dr Koju','978-9937-753-89-0','Dr. Rajendra Koju','Non-Fiction (Health)'),
  b('bh','Purpala','978-9937-910-13-2','Milan Sangraula','Fiction (Novel)'),
  b('bh','Sarbaharako','','',''),
  b('bh','Kriti Samskriti','','',''),
  b('bh','Hiunma Lekhiyeka','','',''),
  b('bh','Amrikane','978-9937-753-69-2','Sarala Gautam','Non-Fiction (Novel)'),
  b('bh','Yeuta Khulla Kitab','','',''),
  b('bh','Naya (Sushila Karki)','978-9937-921-77-0','Sushila Karki','Non-Fiction (Autobiography)'),
  b('bh','Purpala (2nd Ed.)','978-9937-910-13-2','Milan Sangraula','Fiction (Novel)'),
  b('bh','Rangin Manasaya','','',''),
  b('bh','Swor Samrat','','',''),
  b('bh','The Himalayan Grill (2nd)','','',''),
  b('bh','Bhayeka Kura','','',''),
  b('bh','Bahurupi','978-9937-753-96-8','Shreyaj Subedi','Fiction (Stories)'),
  b('bh','Bhanubhakta','','',''),
  b('bh','Sayrem','978-9937-753-94-4','Bhupal Rai','Fiction (Memoirs)'),
  b('bh','Ishworko Karagar','','',''),
  b('bh','Jailma Bis Barsaha','','',''),
  b('bh','Jogi','','',''),
  b('bh','Kirti Sanskriti','','',''),
  b('bh','Depression (2nd)','','',''),
  b('bh','Lashako Khabar + Eng','','',''),
  b('bh','Mutuko Katha','978-9937-753-89-0','Dr. Rajendra Koju','Non-Fiction (Health)'),
  b('bh','Mutuko Katha Illustration','','',''),
  b('bh','Navadurga','','',''),
  b('bh','Nepali Lama Katha','','',''),
  b('bh','Riktha Itihas','','',''),
  b('bh','Siddhicharan','978-9937-982-44-3','Sarubhakta','Non-Fiction (Biography, Memoirs)'),
  b('bh','Tritiya Prakrati','','',''),
  b('bh','14 Falgun','978-9937-982-40-5','Satya Raj Acharya','Non-Fiction (Biography, Memoirs)'),
  b('bh','Hiunma Lekhiyeka (2nd)','','',''),
  b('bh','Sarbahara Ghoda','','',''),
  b('bh','Kaptadbaba Combo','','',''),
  b('bh','Yeuta Mayi Nagarma','978-9937-753-85-2','Ramesh Kshitiz','Fiction (Stories)'),
  b('bh','Sawarni (2nd)','978-9937-753-84-5','Dr. Shreedhar Khannal','Fiction (Nepali)'),
  b('bh','Company (2nd)','','',''),
  b('bh','Swasthya Bigyan (2nd)','978-9937-753-05-0','Khaptad Baba','Non-Fiction (Nepali Health)'),
  b('bh','Bichar Bigyan','978-9937-753-04-3','Khaptad Baba','Non-Fiction (Nepali Health)'),
  b('bh','Vedanta Bigyan (2nd)','','',''),
  b('bh','Echoes of Resilience','','',''),
  b('bh','Loktantra ra Jana Abhimat','978-9937-934-20-6','Chaitanya Mishra','Non-Fiction (Politics)'),
  b('bh','Sarbatra Shanker','','',''),
  b('bh','Tapuka Sworharu','','',''),
  b('bh','Suneko Sasan','','',''),
  b('bh','Nijamati Kotparba','','',''),
  b('bh','Torkin','','',''),
  b('bh','Urbashi','','',''),
  b('bh','Baikalpik Shakti','','',''),
  b('bh','Madhyako Ujyalo','','',''),
  b('bh','Yagavalkya','','',''),
  b('bh','Hiud','','',''),
  b('bh','Bijay Malla','','',''),
  b('bh','Mangali Kusum','','',''),
  b('bh','Gargi','','',''),
  b('bh','Shopieko Sansar','','',''),
  b('bh','Constitution','','',''),
  b('bh','Danpheko Rang','','',''),
  b('bh','Sagarmatha dekhi','','',''),
  b('bh','Fatalism & Development','','',''),
  b('bh','Aayogya Manab','','',''),
  b('bh','Jiban Uwach','','',''),
  b('bh','Asahamati 05','','',''),
  b('bh','The Victory of Life','','',''),
  b('bh','Yali','','',''),
  b('bh','Ganatantra bata Swotantra','','',''),
  b('bh','Prithak Padchap','','',''),
  b('bh','Mokshanta','','',''),
  b('bh','Gya','','',''),
  b('bh','Yek Astitwo','','',''),
  b('bh','Dui Kale Bigiriyeko','','',''),
  b('bh','Ghumne Mech mathi','','',''),
  b('bh','Yedakada','','',''),
  b('bh','Whisper in the Mountain','','',''),
  b('bh','Kirat Savyata','','',''),
  b('bh','Astitwo ko Brahmanda','','',''),
  b('bh','Chaubis Reel','','',''),
  b('bh','Atomic Habit','','',''),
  b('bh','Dharma Bigyan','','',''),
  b('bh','Nepalko Pahilo Nirbachan','','',''),
  b('bh','Samaya Bimba','','',''),
  b('bh','Donkey','','',''),
]

/* ═══════════════════════════════════════════════════════
   FINE PRINT — 63 books (from CSV, in order)
═══════════════════════════════════════════════════════ */
const FP: BookRecord[] = [
  b('fp','Bhukampama Malhampati','978-9937-665-31-5','Rabindra Sameer','Non Fiction','Saroj Ramtel'),
  b('fp','Sagarmatha ko Gahirai','978-9937-665-56-8','Navaraj Parajuli','Poetry','Manju Poudel'),
  b('fp','Mangena: Nepal Manthan','978-9937-665-31-5','Yug Pathak','Non Fiction','Saroj Ramtel'),
  b('fp','Bhuiyan','978-9937-665-28-5','Yangesh','Non Fiction','Manju Poudel'),
  b('fp','Urgenko Ghoda','978-9937-866-60-6','Yug Pathak','Fiction','Manju Poudel','Rajendra Poudel'),
  b('fp','Maha Ko Ma','978-9937-665-32-2','Madan Krishna Shrestha','Non Fiction','Saroj Ramtel','Kishor Kayastha'),
  b('fp','Gumnam Aamaharuko Katha','978-9937-746-14-4','Baburam Bhattrai','Non Fiction','Manju Poudel'),
  b('fp','Overlooked Faces of Nepal','978-9937-746-52-6','Dr. Arpana Pathak / Dr. Paridhi Sharma','Coloring Book','Sachin Yagol Shrestha'),
  b('fp','Nepal ko Sankshipta Brittanta','978-9937-746-44-1','Baburam Acharya','Non Fiction','Manju Poudel','Samir Yagol Shrestha'),
  b('fp','Ghamkiri','978-9937-746-38-0','Nayanraj Pandey','Fiction','Manju Poudel'),
  b('fp','Pandhrau Chuli','978-9937-746-46-5','Khimlal Gautam','Non Fiction','Manju Poudel'),
  b('fp','Mahabhara','978-9937-746-41-0','Basanta Basnet','Fiction','Manju Poudel'),
  b('fp','Bichar-bhanda maathi Desh','978-9937-746-63-2','Rabindra Mishra','Non Fiction','Manju Poudel'),
  b('fp','A Ray of Light in the Himalayas','978-9937-746-53-3','Takashi Miyahara','Travel, Non-fiction','Manju Poudel'),
  b('fp','Hridaya','978-9937-746-33-5','Bhagawan Koirala','Autobiography','Manju Poudel'),
  b('fp','Ijoriya','978-9937-746-59-5','Subin Bhattarai','Fiction','Manju Poudel'),
  b('fp','Mafalar','978-9937-746-64-9','Pradip Rodan','Fiction','Manju Poudel'),
  b('fp','Panighatta','978-9937-746-51-9','Suresh Pranjali','Fiction','Manju Poudel'),
  b('fp','Tyo Nepal','978-9937-746-51-9','Dadi Sapkota','Non-Fiction','Manju Poudel'),
  b('fp','Eklo','978-993-7746-71-7','Buddhisagar','Fiction','Saroj Ramtel'),
  b('fp','Barah Khari Utkrista Katha 2079','978-9937-746-66-3','','Fiction','Saroj Ramtel'),
  b('fp','Usle Diyeko Umer','978-9937-746-67-0','Buddhisagar','Fiction','Manju Poudel'),
  b('fp','Sushree Parijat','978-9937-746-70-0','Govinda Giri Prerana','Non Fiction','Saroj Ramtel','Shilpee Binod'),
  b('fp','Paniphoto Panadekhi Pardasamma','978-9937-746-92-2','Khagendra Lamichhane','Fiction','Manju Poudel','Abishkar Joshi'),
  b('fp','Bhupi: A Daughter\'s Memo','978-9937-790-02-4','Kavita Sherchan','Memoir','Manju Poudel','Abinash Tamang'),
  b('fp','Raipali Bhanjyang','978-9937-790-04-8','Sagar Khadka','Fiction','Manju Poudel'),
  b('fp','Covid: Nasocheko Nabhogeko Sankat','978-9937-790-09-3','Dipa Dahal','Non Fiction','Manju Poudel'),
  b('fp','A Young Wandering Mudlark in Old Kathmandu','978-9937-790-05-5','Peter J. Karthak','Fiction','Saroj Ramtel'),
  b('fp','Hamro Samaj: Ek Aadhyan','978-9937-790-30-7','Janaklal Sharma','Non Fiction','Saroj Ramtel'),
  b('fp','Ma kina hindu','978-9937-790-46-8','Sashi Tharoor','Translation','Manju Poudel','Lok Chitrakar'),
  b('fp','J 33 J (Thirty Three)','978-9937-790-18-5','Kumar Nagarkoti','Fiction (Novels)'),
  b('fp','Janaklal Sharmaka Sansmaran','978-9937-746-97-7','Janaklal Sharma','Non Fiction','Saroj Ramtel'),
  b('fp','Shree Panch ko Sewama','978-9937-790-27-7','Hemanta Mishra','Non Fiction','Saroj Ramtel'),
  b('fp','BarahKhari Utkrista Katha 2080','978-9937-790-16-1','','Fiction'),
  b('fp','Simsara','978-9937-790-32-1','Basanta Basnet','Fiction','Manju Poudel'),
  b('fp','BarahKhari Utkrista Katha 2081','978-9937-790-40-6','','Fiction'),
  b('fp','Samjhanama Buba Mahakavi Devkota','978-9937-790-36-9','Padma Prasad Devkota','Memoir','Manju Poudel'),
  b('fp','China Harayeko Manchhe','978-9937-866-64-4','Hari Bansha Acharya','Autobiography','Manju Poudel','Kishor Kayastha'),
  b('fp','Laxmi Nibandhasangraha','978-9937-790-37-6','Laxmi Prasad Devkota','Non Fiction','Manju Poudel'),
  b('fp','Sanatan Pragya Adhunik Bishwa','978-9937-790-31-4','Dalai Lama','Non Fiction','Manju Poudel'),
  b('fp','Pahilo Sansad: BP-Mahendra Takraab','978-9937-790-42-0','Jagat Nepal','Non Fiction','Manju Poudel'),
  b('fp','Yogmaya','978-9937-790-50-5','Neelam Karki Niharika','Fiction','Manju Poudel'),
  b('fp','Chirharan','978-9937-790-64-2','Neelam Karki Niharika','Fiction','Saroj Ramtel'),
  b('fp','Draupadi Awashesh','978-9937-790-44-4','Neelam Karki Niharika','Fiction','Saroj Ramtel'),
  b('fp','By The Book','978-9937-790-52-9','Birendra Bahadur Basnet','Non Fiction','Saroj Ramtel'),
  b('fp','Padarthaharuko Geet','978-9937-790-43-7','Sarubhakta','Fiction','Manju Poudel'),
  b('fp','Akshat Antarctica','978-9937-790-51-2','Jiba Lamichhane','Non Fiction','Manju Poudel'),
  b('fp','Shunyako Mulya','978-9937-790-67-3','Nawaraj KC','Non Fiction'),
  b('fp','A White Life','978-9937-790-88-8','Amar Nyaupane, Translated by Niranjan Kunwar','Translation','Manju Poudel','Durga Baral Vatsayan'),
  b('fp','BarahKhari Utkrista Katha 2082','978-9937-790-90-1','','Fiction'),
  b('fp','Gyanika','978-9937-790-77-2','Dadi Sapkota','Non Fiction','Manju Poudel'),
  b('fp','Mathiko Aadesh Chha','978-9937-790-73-4','Rabindra Mishra','Fiction','Manju Poudel'),
  b('fp','Yug Dekhi Yug Samma','','Rajesh Hamal, Yangesh','Non Fiction','Manju Poudel','Sworup Nhasiju'),
  b('fp','Phirphire','978-9937-746-79-3','Buddhisagar','Fiction','Manju Poudel'),
  b('fp','Nepal ma Lichhabishasan','978-9937-790-57-4','Mahesh Raj Panta','Non Fiction','Saroj Ramtel'),
  b('fp','Gulzar Kabita','978-9937-790-54-3','Gulzar','Fiction','Manju Poudel','Pranod Dutta'),
  b('fp','Siyo Dhago','978-9905-602-04-5','Pradip Pariyar','Memoir','Saroj Ramtel'),
  b('fp','Tyo Nepal: Regards Francais Sur Une Terre Himalayenne','978-9905-602-02-1','Dadi Sapkota','Non Fiction','Saroj Ramtel'),
  b('fp','Agyat','978-9937-790-99-4','Keshav Raj Gyawali','Fiction','Saroj Ramtel'),
  b('fp','Itha','978-9937-790-96-3','Keshav Dahal','Fiction','Manju Poudel'),
  b('fp','Adhunik Nepalko Prashasanik Itihas','978-9937-790-81-9','Tulasi Ram Vaidya, Triratna Manandhar','Non Fiction','Saroj Ramtel'),
  b('fp','Adhunik Nepalko Rajanaitik Itihas','978-9937-790-80-2','Triratna Manandhar, Niranjan Sharma','Non Fiction','Saroj Ramtel'),
  b('fp','Rajmata','978-9937-790-98-7','Neelam Karki Niharika','Fiction','Manju Poudel'),
]

/* ═══════════════════════════════════════════════════════
   SUNBARSHI — 5 books
═══════════════════════════════════════════════════════ */
const SB: BookRecord[] = [
  b('sunbarshi','Ujyalotira','978-9937-094-51-1','Tikaram Regmi','Fiction'),
  b('sunbarshi','Paisako Nalibeli','978-9937-129-68-8','Yogendra Timalsina','Non Fiction'),
  b('sunbarshi','Ganitiya Juktiharu','978-9937-137-36-2','Tilak Bahadur Khatri','Non Fiction'),
  b('sunbarshi','Basuriko Dhun','978-9937-163-36-1','Tikaram Regmi','Fiction'),
  b('sunbarshi','Sahasi Denis','','Victor Dragunsky','Translation'),
]

/* ═══════════════════════════════════════════════════════
   NEPALAYA — 8 books
═══════════════════════════════════════════════════════ */
const NP: BookRecord[] = [
  b('nepalaya','Kumari Prashna','978-9937-932-09-7','Durga Karki','Fiction'),
  b('nepalaya','Dumero','978-9937-937-80-1','Sarala Gautam','Fiction'),
  b('nepalaya','Singha Durbarko Ghumne Mech','978-9937-937-82-5','Sudha Sharma','Non Fiction'),
  b('nepalaya','Parityakta','978-9937-937-81-8','Bhuwan Dhungana','Fiction'),
  b('nepalaya','Kshamadaan','978-9937-937-85-6','Ganesh Prasad Lath','Fiction'),
  b('nepalaya','Hiti Pranali','978-9937-937-89-4','Padma Sunder Joshi','Non Fiction'),
  b('nepalaya','National Security and the State: A Focus on Nepal','978-9937-953-02-3','Keshar Bahadur Bhandari','Non Fiction'),
  b('nepalaya','Chitralekhako Chaurasi','978-9937-953-07-8','Prajwal Parajuly','Fiction'),
]

/* ═══════════════════════════════════════════════════════
   KITAB — 16 books
═══════════════════════════════════════════════════════ */
const KT: BookRecord[] = [
  b('kitab','Biman Bidroha','978-9937-043-71-7','Durga Subedi','Non Fiction','Bijay Maharjan','Bhishan Rajbhandari'),
  b('kitab','Aghori','978-9937-049-04-7','Rajendra Parajuli','Fiction','Saroj Ramtel'),
  b('kitab','Durbarko Dukhanta','978-9937-059-26-8','Sundarpratap Rana','Non Fiction','Saroj Ramtel'),
  b('kitab','Pararashtra ka Patra','978-9937-061-48-3','Dr. Madan Kumar Bhattarai','Non Fiction','Saroj Ramtel'),
  b('kitab','Kara','978-9937-068-06-2','Sushila Karki','Fiction','Saroj Ramtel'),
  b('kitab','Mokshabhumi','978-9937-076-89-0','Keshab Dahal','Fiction','Saroj Ramtel'),
  b('kitab','Sanaiya','978-9937-088-39-8','Hom Karki','Non Fiction','Saroj Ramtel'),
  b('kitab','Sati','978-9937-949-20-0','Sujit Mainali','Non Fiction','Saroj Ramtel'),
  b('kitab','Oh Darjeeling!','978-9937-949-21-7','Mahendra P. Lama','Non Fiction','Saroj Ramtel'),
  b('kitab','Pardesh ko Pasina','978-9937-949-23-1','Edited by Yangesh','Non Fiction','Saroj Ramtel'),
  b('kitab','Madhavi O Madhavi','978-9937-949-24-8','Keshab Dahal','Fiction','Saroj Ramtel'),
  b('kitab','Sala Pahadmein Kya Hai','978-9937-949-25-5','Minbahadur Bista','Fiction','Saroj Ramtel'),
  b('kitab','Bhikshu, Byapar ra Bidroha','978-9937-949-27-9','Sudheer Sharma','Non Fiction','Saroj Ramtel'),
  b('kitab','Himalpariko Huri','978-9937-949-26-2','Sudheer Sharma','Non Fiction','Saroj Ramtel'),
  b('kitab','Saahas','978-9937-9492-8-6','Mina Poudel','Non Fiction','Saroj Ramtel'),
  b('kitab','BP Ra Bidrohka Ti Din','978-9937-949-29-3','Dharma Gautam','Non Fiction','Saroj Ramtel'),
]

/* ═══════════════════════════════════════════════════════
   KALAM — 3 books
═══════════════════════════════════════════════════════ */
const KL: BookRecord[] = [
  b('kalam','Aato Oda','978-3027-120-66-1','Januka Khatiwada','Fiction'),
  b('kalam','Godhuli Geet','978-9937-141-10-9','Bhanu Bokhim','Fiction'),
  b('kalam','Anaavaran','978-9937-143-20-2','Bijaya Sapkota','Fiction'),
]

/* ═══════════════════════════════════════════════════════
   LIPI — 3 books
═══════════════════════════════════════════════════════ */
const LP: BookRecord[] = [
  b('lipi','B. P. Koirala: Ek Krantikari Byaktitwa','978-9937-933-75-9','Bhola Chaterjee','Non-Fiction'),
  b('lipi','Yashodhara','978-9937-933-76-6','Hari Bol Kafle','Fiction'),
  b('lipi','Dabli','978-9937-933-77-3','Rajeshwor Devkota','Fiction'),
]

/* ═══════════════════════════════════════════════════════
   INDIGO — 2 books
═══════════════════════════════════════════════════════ */
const IN: BookRecord[] = [
  b('indigo','Coronatantra','978-9937-134-67-5','Rabindra Sameer','Non Fiction','Bishnu Kumar'),
  b('indigo','Bhurajnitiko Bhar','978-9937-143-31-8','Baburam Bishwakarma','Non Fiction','Bishnu Kumar'),
]

/* ═══════════════════════════════════════════════════════
   OTHERS — 10 books
═══════════════════════════════════════════════════════ */
const OT: BookRecord[] = [
  b('others','Side Hero','978-9937-708-45-6','Brazesh','Memoir'),
  b('others','Yambunera','978-9937-705-51-6','Bina Theeng','Fiction'),
  b('others','Slyapla Rinpoche','','',''),
  b('others','Sanchaman','','',''),
  b('others','Bimokshya','978-9937-775-39-7','Ghimire Yubaraj',''),
  b('others','Himbu','','Sonam Lakhpa Sherpa',''),
  b('others','Ganatantrako Pahilo Dashak','978-9937-074-01-8','Pushpa Kamal Dahal','Non Fiction'),
  b('others','Prachanda - Naya Yug','','',''),
  b('others','Nagarik Awaj','978-9937-1-3876-5','',''),
  b('others','The Forest Fire','','',''),
]

/* ═══════════════════════════════════════════════════════
   COMBINED
═══════════════════════════════════════════════════════ */
export let BOOKS_DATA: BookRecord[] = [...BH, ...FP, ...SB, ...NP, ...KT, ...KL, ...LP, ...IN, ...OT]
