import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const books = [
  { title: 'Pagal Basti', isbn: '978-9937-928-08-3', author: 'Sarubhakta', genre: 'Fiction (Novel)', size: '' },
  { title: 'British Samrajyaka Nepali Mohora', isbn: '978-9937-931-23-6', author: 'Jhalak Subedi', genre: 'Non-Fiction (History)', size: '' },
  { title: 'The Flipside of The British Empire', isbn: '978-9937-934-21-3', author: 'Jhalak Subedi', genre: 'Non-Fiction (History)', size: '' },
  { title: 'Devkota', isbn: '978-9937-790-36-9', author: 'Padma Devkota', genre: 'Non-Fiction (Biography)', size: '' },
  { title: 'Shilanyas', isbn: '978-9937-931-20-5', author: 'Sujit Mainali', genre: 'Non-Fiction (History)', size: '' },
  { title: 'Bath-Tub', isbn: '978-9937-931-21-2', author: 'Kumar Nagarkoti', genre: 'Fiction (Drama)', size: '' },
  { title: 'Aparajita- Parijatka Chithiharu', isbn: '978-9937-921-76-3', author: 'Sukanya Waiba', genre: 'Non-Fiction', size: '', layoutDesigner: 'Abinash Tamang' },
  { title: 'Nepal Nakhuleko Pato', isbn: '978-9937-931-26-7', author: 'Dr. Tirthabahadur Shrestha', genre: 'Non-Fiction', size: '' },
  { title: 'Ghanchakkar', isbn: '978-9937-931-27-4', author: 'Sanjeev Uprety', genre: 'Fiction (Novel)', size: '' },
  { title: 'Maidaro', isbn: '978-9937-931-24-3', author: 'Bhupeen', genre: 'Fiction (Novel)', size: '5.0 x 7.7 x 0.9' },
  { title: 'Pretkalpa', isbn: '978-9937-931-25-0', author: 'Narayan Dhakal', genre: 'Fiction (Novel)', size: '' },
  { title: 'Hansa', isbn: '978-9937-934-25-1', author: 'Sanjeev Uprety', genre: 'Fiction (Novel)', size: '' },
  { title: 'Jeevan Kaada Ki Phool', isbn: '978-9937-910-14-9', author: 'Jhamak Ghimire', genre: 'Non-Fiction (Biography)', size: '5.0 x 7.8 x 0.5' },
  { title: 'Shankar Lamichhane', isbn: '978-9937-931-28-1', author: 'Shankar Lamichhane', genre: 'Non-Fiction (Essay)', size: '' },
  { title: 'Loktantra ra Aajako Marxwad', isbn: '978-9937-934-20-6', author: 'Chaitanya Mishra', genre: 'Non-Fiction (Essay)', size: '' },
  { title: 'Asahamati', isbn: '978-9937-857-66-6', author: 'Saurav', genre: 'Non-Fiction (Essay)', size: '' },
  { title: 'Naaso', isbn: '978-9937-934-27-5', author: 'Guru Prasad Mainali', genre: 'Fiction (Story)', size: '' },
  { title: 'Nepalko Sambidhan', isbn: '', author: '', genre: '', size: '' },
  { title: 'Timri Swasni Ra Ma', isbn: '978-9993-324-26-3', author: 'Manu Brajaki', genre: 'Fiction (Novel)', size: '' },
  { title: 'Pratigandha', isbn: '978-9937-934-28-2', author: 'Sarubhakta', genre: 'Fiction (Novel)', size: '' },
  { title: 'Ghintang Ghisi Twak', isbn: '978-9937-934-22-0', author: 'Rupesh Shrestha', genre: 'Fiction (Poetry)', size: '' },
  { title: 'Manto', isbn: '978-8184-001-44-0', author: "Sa'adat Hasan Manto", genre: 'Fiction (Literature)', size: '' },
  { title: 'Muluki Ain', isbn: '', author: '', genre: '', size: '' },
  { title: 'Uhileko Nepal', isbn: '978-9937-934-29-9', author: 'Bhairav Risal', genre: 'Non-Fiction', size: '' },
  { title: 'Vimukti', isbn: '978-9937-935-14-2', author: 'Malla K. Sundar', genre: 'Fiction (Novel)', size: '' },
  { title: 'Ek Haatko Taali', isbn: '978-9937-753-14-2', author: 'Yubaraj Nayaghare', genre: 'Fiction (Novel)', size: '' },
  { title: 'Parkhal Lagayepachi Dherai Thok Bahira Parchha', isbn: '978-9937-753-03-6', author: 'Basu Shashi', genre: 'Fiction (Poetry)', size: '' },
  { title: 'Mann', isbn: '978-9937-941-41-9', author: 'Leeladhwaj Thapa', genre: 'Fiction (Novel)', size: '' },
  { title: 'Nepali Lokkatha', isbn: '978-9937-935-17-3', author: 'Tulasi Diwasa', genre: 'Fiction (Folk Stories)', size: '' },
  { title: 'Tamas', isbn: '978-9937-935-12-8', author: 'Narayan Dhakal', genre: 'Fiction (Stories)', size: '' },
  { title: 'Eklavya ko Debre Haat', isbn: '978-9937-935-13-5', author: 'Giri Shrees Magar', genre: 'Fiction (Poetry)', size: '' },
  { title: 'Kalpa-Grantha', isbn: '978-9937-935-11-1', author: 'Kumar Nagarkoti', genre: 'Fiction (Stories)', size: '' },
  { title: 'Khagendra Sangraula', isbn: '978-9937-950-04-6', author: 'Ujjwal Prasai', genre: 'Non Fiction (Biography)', size: '' },
  { title: 'Aksharganj', isbn: '978-9937-753-29-6', author: 'Kumar Nagarkoti', genre: 'Fiction (Novel)', size: '' },
  { title: 'Parisscano', isbn: '978-9937-935-15-9', author: 'Niru Tripathi', genre: 'Fiction (Novel)', size: '' },
  { title: 'Siddhantaka Kura', isbn: '978-9937-941-48-8', author: 'Sanjeev Uprety', genre: 'Non-Fiction (Essay)', size: '' },
  { title: 'Musha Manush', isbn: '', author: 'John Steinbeck, Translated by Ganess Paudel', genre: 'Fiction (Novel)', size: '' },
  { title: 'Rinpoche', isbn: '', author: '', genre: '', size: '' },
  { title: 'Antarmanko Yatra', isbn: '978-9937-935-16-6', author: 'Jagadish Ghimire', genre: 'Non-Fiction (Biography)', size: '' },
  { title: 'Pratek Thau Pratek Manche', isbn: '978-9937-804-66-0', author: 'Peter J Karthak', genre: 'Fiction (Novel)', size: '' },
  { title: 'Satta ra Satya', isbn: '978-9937-941-42-6', author: 'Khagendra Sangroula', genre: 'Non Fiction (Essays)', size: '' },
  { title: 'Mithya', isbn: '978-9937-753-09-8', author: 'Deepak Parajuli', genre: 'Fiction (Novel)', size: '' },
  { title: 'Galli Sansar', isbn: '978-9937-753-72-2', author: 'Roshan Sherchan', genre: 'Non-Fiction (Essay)', size: '' },
  { title: 'Madhavi', isbn: '978-9937-753-01-2', author: 'Madan Mani Dixit', genre: 'Fiction (Novel)', size: '' },
  { title: 'Yuganta', isbn: '978-9937-793-51-8', author: 'Irawati Karve, Translated by Sujit Mainali', genre: 'Non-Fiction (Essay)', size: '' },
  { title: 'Damanraj Tuladhar', isbn: '978-9937-935-19-7', author: 'Damanraj Tuladhar', genre: 'Non-Fiction (Memoir)', size: '' },
  { title: 'Narayan Gopal', isbn: '978-9937-167-42-0', author: 'Prakash Sayami', genre: 'Non-Fiction (Biography)', size: '' },
  { title: 'Metamorphosis', isbn: '978-9937-941-45-7', author: 'Franz Kafka, Translated by Ramchandra KC', genre: 'Fiction (Novel)', size: '' },
  { title: 'Aapa Kharpa', isbn: '978-9937-753-00-5', author: 'Tirtha Gurung', genre: 'Fiction (Novel)', size: '' },
  { title: 'Ghosts in the Bamboo', isbn: '978-9937-941-44-0', author: 'Greta Rana', genre: 'Fiction (Novel)', size: '' },
  { title: 'Pagalbasti 02', isbn: '978-9937-928-08-3', author: 'Sarubhakta', genre: 'Fiction (Novel)', size: '' },
  { title: 'Asahamati 02', isbn: '978-9937-910-16-3', author: 'Saurav', genre: 'Non-Fiction (Literature)', size: '' },
  { title: 'Ae Durka Sitara', isbn: '978-9937-753-10-4', author: 'Kiran Kharel', genre: 'Fiction (Poetry)', size: '' },
  { title: 'Mero Nau Dashak', isbn: '978-9937-753-13-5', author: 'Surya Bahadur Thapa', genre: 'Non-Fiction (Biography)', size: '' },
  { title: 'Agni', isbn: '978-9937-753-06-7', author: 'Naba Raj Lamsal', genre: 'Fiction (Poetry)', size: '' },
  { title: 'Paitala', isbn: '978-9937-910-15-6', author: 'Ganess Paudel', genre: 'Fiction (Novel)', size: '' },
  { title: 'Aayo Gorkhali', isbn: '', author: 'Tim Gurung', genre: 'Non-Fiction (Autobiography)', size: '' },
  { title: 'Mystica', isbn: '978-9937-895-56-9', author: 'Kumar Nagarkoti', genre: 'Fiction (Novel)', size: '' },
  { title: 'Aakashamukhi', isbn: '978-9937-753-15-9', author: 'Translated by Mohan Mainali', genre: '', size: '' },
  { title: 'Indian Diplomacy in Nepal', isbn: '978-9937-753-16-6', author: 'M.D. Dharamdasani', genre: 'Non Fiction (History)', size: '' },
  { title: 'Samaya Trasadi', isbn: '978-9937-753-18-0', author: 'Sarubhakta', genre: 'Fiction (Novel)', size: '' },
  { title: 'MCC', isbn: '', author: '', genre: '', size: '' },
  { title: 'Adhunik Bharatiya Nepali Katha', isbn: '978-9937-753-24-1', author: 'Abinash Shrestha', genre: 'Fiction (Stories)', size: '' },
  { title: 'Kanchanjangha Juhaar', isbn: '978-9937-753-27-2', author: 'Joseph Dalton Hooker, Translated by Hasta Gurung', genre: 'Fiction (Essay)', size: '' },
  { title: 'Vishwo Aarthik Kranti', isbn: '978-9937-753-23-4', author: 'Krishna Paudel', genre: 'Non-Fiction (Essay)', size: '' },
  { title: 'Satyamohan', isbn: '978-9937-753-21-0', author: 'Girish Giri', genre: 'Non-Fiction (Biography)', size: '' },
  { title: 'Transit', isbn: '', author: '', genre: 'Fiction (Drama)', size: '' },
  { title: 'Nepali Sangeet Durbar', isbn: '', author: '', genre: 'Non-Fiction (History)', size: '' },
  { title: 'Ba-aama', isbn: '978-9937-753-30-2', author: 'Ramlal Joshi', genre: 'Fiction (Stories)', size: '' },
  { title: 'Devika', isbn: '', author: 'Devika Bandana', genre: 'Biography', size: '' },
  { title: 'Mastiska ko', isbn: '9789937990691', author: '', genre: '', size: '' },
  { title: 'Khagendra Lamichhaneka Natak', isbn: '978-9937-753-31-9', author: 'Khagendra Lamichhane', genre: 'Fiction (Drama)', size: '' },
  { title: 'Mantra', isbn: '', author: '', genre: '', size: '' },
  { title: 'Fulani', isbn: '978-9937-910-10-1', author: 'Khagendra Lamichhane', genre: 'Fiction (Novel)', size: '' },
  { title: 'Furke', isbn: '978-9937-753-28-9', author: 'Khagendra Lamichhane', genre: 'Fiction (Novel)', size: '' },
  { title: 'Karmana', isbn: '978-9937-753-38-8', author: 'Jhamak Ghimire', genre: 'Non Fiction (Essay)', size: '', collaboratorArtist: 'Abinash Tamang' },
  { title: 'Seto Siudoo', isbn: '', author: '', genre: 'Fiction (Novel)', size: '' },
  { title: 'Samaya Sakshi', isbn: '978-9937-753-33-3', author: 'Babita Basnet', genre: 'Non Fiction (Memoirs)', size: '' },
  { title: 'Nepali Coin', isbn: '', author: '', genre: '', size: '' },
  { title: 'Parbat Parbatma Batuwa Gham', isbn: '978-9937-753-34-0', author: 'Ramesh Kshitiz', genre: 'Fiction (Poetry)', size: '' },
  { title: 'Arko Sanjh Parkhera Sanjhma', isbn: '978-9937-753-35-7', author: 'Ramesh Kshitiz', genre: 'Fiction (Poetry)', size: '' },
  { title: 'Dwarikadevi Thakurani', isbn: '978-9937-753-17-3', author: 'Ratan Bhandari', genre: 'Non-Fiction (Biography)', size: '', collaboratorArtist: 'Rasik Rai' },
  { title: 'Music Myth and Melody', isbn: '', author: '', genre: 'Non Fiction (History)', size: '' },
  { title: 'Antar', isbn: '978-9937-753-43-2', author: 'Ramesh Sayan', genre: 'Fiction (Novel)', size: '', collaboratorArtist: 'Freepik' },
  { title: 'Bhagna Bhairav', isbn: '978-9937-753-42-5', author: 'Prollaas Sindhuliya', genre: 'Fiction (Novel)', size: '', collaboratorArtist: 'Shilpee Binod/ Aryal Family' },
  { title: 'Chhuteka Anuhar', isbn: '978-9937-753-44-9', author: 'Ramesh Sayan', genre: 'Fiction (Novel)', size: '', collaboratorArtist: 'Freepik' },
  { title: 'Docha', isbn: '978-9937-910-16-3', author: 'Kumar Nagarkoti', genre: 'Non-Fiction (Memoir)', size: '' },
  { title: 'Sworna Katha', isbn: '9789937982412', author: '', genre: '', size: '' },
  { title: 'Vegeterian', isbn: '978-9937-753-46-3', author: 'Han Kang, Translated by Prawin Adhikari', genre: 'Fiction (Novel)', size: '' },
  { title: 'Asangati', isbn: '', author: 'Saurav', genre: 'Non-Fiction (Essay)', size: '' },
  { title: 'Manu', isbn: '978-9937-753-45-6', author: 'Dr. Deviprasad Subedi', genre: 'Fiction (Novel)', size: '' },
  { title: 'Jogiyana', isbn: '978-9937-753-53-1', author: 'Kumar Nagarkoti', genre: 'Non-Fiction (Memoir)', size: '' },
  { title: 'Dekheko Desh', isbn: '978-9937-921-72-5', author: 'Mohan Mainali', genre: '', size: '' },
  { title: 'Prof Surya Subedi', isbn: '978-9937-753-70-8', author: 'Bhagirath Yogi', genre: 'Non-Fiction (Biography)', size: '' },
  { title: 'Bikalpa', isbn: '978-9937-753-50-0', author: "Ram Karki 'Parth'", genre: 'Non-Fiction (Nepali)', size: '' },
  { title: 'Bhupinka Kabita', isbn: '978-9937-753-57-9', author: 'Bhupeen', genre: 'Fiction (Poetry)', size: '', collaboratorArtist: 'Freepik' },
  { title: 'Ghatmandu', isbn: '978-9937-910-12-5', author: 'Kumar Nagarkoti', genre: 'Fiction (Nepali)', size: '' },
  { title: 'Ghar Farki Raheko', isbn: '978-9937-856-35-5', author: 'Ramesh Kshitiz', genre: 'Fiction (Poetry)', size: '' },
  { title: 'Lahana ra teer', isbn: '978-9937-753-60-9', author: 'Avaya Shrestha', genre: 'Fiction (Poetry, Drama, Literature)', size: '' },
  { title: 'Meri Neelima', isbn: '978-9937-895-51-4', author: 'Madan Mani Dixit', genre: 'Fiction (Nepali)', size: '' },
  { title: 'Mukam Ranamaidan', isbn: '978-9937-753-55-5', author: 'Mohan Mainali', genre: 'Non-Fiction (History)', size: '' },
  { title: 'Aarogya Bigyan', isbn: '9789937753661', author: 'Khaptad Baba', genre: 'Non-Fiction (Religion)', size: '' },
  { title: 'Amrikane Kashi', isbn: '978-9937-753-69-2', author: 'Sarala Gautam', genre: 'Non-Fiction (Novel)', size: '' },
  { title: 'Kimino Girl', isbn: '978-9937-753-58-6', author: 'Kumar Nagarkoti', genre: 'Fiction (Stories)', size: '' },
  { title: 'Khappar', isbn: '978-9937-753-58-6', author: 'Kumar Nagarkoti', genre: 'Fiction (Stories)', size: '' },
  { title: 'Aayu Choor', isbn: '', author: 'Kumar Nagarkoti', genre: 'Fiction (Novels)', size: '' },
  { title: 'Swasthya Bigyan', isbn: '978-9937-753-05-0', author: 'Khaptad Baba', genre: 'Non-Fiction (Nepali Health)', size: '' },
  { title: 'Asahamati 04', isbn: '978-9937-753-82-1', author: 'Saurav', genre: 'Non-Fiction (Essays)', size: '' },
  { title: 'Sawarni', isbn: '978-9937-753-84-5', author: 'Dr. Shreedhar Khannal', genre: 'Fiction (Nepali)', size: '' },
  { title: 'Yeuta Mai Nagarma', isbn: '978-9937-753-85-2', author: 'Ramesh Kshitiz', genre: 'Fiction (Stories)', size: '' },
  { title: 'Dr Koju', isbn: '978-9937-753-89-0', author: 'Dr. Rajendra Koju', genre: 'Non-Fiction (Health)', size: '' },
  { title: 'Purpala', isbn: '978-9937-910-13-2', author: 'Milan Sangraula', genre: 'Fiction (Novel)', size: '' },
  { title: 'Naya (Sushila Karki)', isbn: '978-9937-921-77-0', author: 'Sushila Karki', genre: 'Non-Fiction (Autobiography)', size: '' },
  { title: 'Bahurupi', isbn: '978-9937-753-96-8', author: 'Shreyaj Subedi', genre: 'Fiction (Stories)', size: '' },
  { title: 'Sayrem', isbn: '978-9937-753-94-4', author: 'Bhupal Rai', genre: 'Fiction (Memoirs)', size: '' },
  { title: 'Mutuko Katha', isbn: '978-9937-753-89-0', author: 'Dr. Rajendra Koju', genre: 'Non-Fiction (Health)', size: '' },
  { title: 'Siddhicharan', isbn: '978-9937-982-44-3', author: 'Sarubhakta', genre: 'Non-Fiction (Biography, Memoirs)', size: '' },
  { title: '14 Falgun', isbn: '978-9937-982-40-5', author: 'Satya Raj Acharya', genre: 'Non-Fiction (Biography, Memoirs)', size: '' },
  { title: 'Loktantra ra Jana Abhimat', isbn: '978-9937-934-20-6', author: 'Chaitanya Mishra', genre: 'Non-Fiction (Politics)', size: '' },
  { title: 'Bichar Bigyan', isbn: '978-9937-753-04-3', author: 'Khaptad Baba', genre: 'Non-Fiction (Nepali Health)', size: '' },
]

async function main() {
  console.log('Seeding Bookhill books...')

  let added = 0
  let skipped = 0

  for (const book of books) {
    // Skip books with no title
    if (!book.title.trim()) { skipped++; continue }

    try {
      await prisma.book.create({
        data: {
          title: book.title.trim(),
          size: book.size || '',
          isbn: book.isbn || '',
          author: book.author || '',
          genre: book.genre || '',
          layoutDesigner: (book as any).layoutDesigner || '',
          collaboratorArtist: (book as any).collaboratorArtist || '',
          description: '',
          coverImageUrl: '',
          publication: 'bh',  // Bookhill
          hasSpotUV: false,
          hasMatteLamination: false,
          hasFoilEmboss: false,
          isBestSeller: false,
          isAwardWinner: false,
          awardName: '',
          purchaseLink: '',
        },
      })
      added++
      console.log(`  ✓ ${book.title}`)
    } catch (err: any) {
      console.error(`  ✗ ${book.title}: ${err.message}`)
      skipped++
    }
  }

  console.log(`\nDone! Added: ${added}, Skipped: ${skipped}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
