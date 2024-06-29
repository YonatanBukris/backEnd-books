// seed.js
// This script seeds the database with sample data.
// This is for development purposes only and should not be used in production.


const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Book = require("./models/book.model");

dotenv.config(); // Load environment variables

// Sample data
const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        description: "A novel about the serious issues of rape and racial inequality told from the perspective of a young girl in the Deep South."
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        description: "A dystopian novel set in a totalitarian society under constant surveillance, exploring themes of oppression and control."
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        description: "A tragic story of Jay Gatsby and his unrequited love for Daisy Buchanan, set in the Roaring Twenties."
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        description: "A classic romance novel that explores the themes of love, reputation, and class distinctions in early 19th century England."
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        description: "A story about teenage angst and alienation, told through the eyes of the rebellious Holden Caulfield."
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville",
        genre: "Adventure",
        description: "An epic tale of the obsessive quest of Captain Ahab for revenge on Moby Dick, the giant white sperm whale."
    },
    {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        genre: "Romance",
        description: "A novel that follows the emotions and experiences of its eponymous heroine, including her growth to adulthood and love for Mr. Rochester."
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        description: "An epic fantasy adventure about the quest to destroy the One Ring and the battle against the dark lord Sauron."
    },
    {
        title: "Animal Farm",
        author: "George Orwell",
        genre: "Political Satire",
        description: "A satirical allegory about the rise of Stalinism in the Soviet Union, told through the story of a group of farm animals who overthrow their human farmer."
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        description: "A fantasy adventure about Bilbo Baggins, a hobbit who goes on a quest to win a share of the treasure guarded by the dragon Smaug."
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        genre: "Historical Fiction",
        description: "A novel that intertwines the lives of private and public individuals during the time of the Napoleonic wars."
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        genre: "Philosophical Fiction",
        description: "A psychological drama exploring the moral dilemmas of crime, guilt, and redemption, centered on the character Raskolnikov."
    },
    {
        title: "The Odyssey",
        author: "Homer",
        genre: "Epic Poetry",
        description: "An epic poem about the adventures of Odysseus as he tries to return home after the Trojan War."
    },
    {
        title: "The Divine Comedy",
        author: "Dante Alighieri",
        genre: "Epic Poetry",
        description: "An epic poem describing Dante's journey through Hell, Purgatory, and Paradise, guided by the Roman poet Virgil."
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Dystopian",
        description: "A dystopian novel exploring a future world where humans are controlled through technological and social engineering."
    },
    {
        title: "Wuthering Heights",
        author: "Emily Brontë",
        genre: "Gothic Fiction",
        description: "A novel about the intense and almost demonic love between Catherine Earnshaw and Heathcliff, and how their passion destroys them and those around them."
    },
    {
        title: "The Iliad",
        author: "Homer",
        genre: "Epic Poetry",
        description: "An epic poem that tells the story of the last year of the Trojan War, focusing on the hero Achilles."
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        genre: "Gothic Fiction",
        description: "A novel about the young scientist Victor Frankenstein who creates a grotesque creature in an unorthodox scientific experiment."
    },
    {
        title: "The Grapes of Wrath",
        author: "John Steinbeck",
        genre: "Historical Fiction",
        description: "A novel about the Joad family's journey from the Dust Bowl of Oklahoma to California during the Great Depression."
    },
    {
        title: "Great Expectations",
        author: "Charles Dickens",
        genre: "Fiction",
        description: "A novel about the growth and personal development of an orphan named Pip, set in 19th-century England."
    }
]
;

// Insert sample data into the database
async function seedDB(){
    await connectDB(); // Connect to the database
    try{
        await Book.deleteMany({});
        await Book.insertMany(books);
        console.log("Database seeded");
    } catch(err){
        console.error(err);
    } finally {
        mongoose.connection.close(); // Close the database connection
    }
}

seedDB();
