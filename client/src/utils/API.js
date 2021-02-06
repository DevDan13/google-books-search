/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const googleAPI = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
 
  getGoogleBooks: function(searchTerm) {
    return axios.get(googleAPI + searchTerm);
  },
    // Gets all books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("hittttt");
    return axios.post("/api/books", bookData);
  }
};