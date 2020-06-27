const myCollection = {
    books: [
      {
        title: 'Cien Años de Soledad',
        author: 'Gabriel García Márquez',
        read: true
      },
      {
        title: 'Do Androids Dream of Electric Sheep',
        author: 'Phillip K. Dick',
        read: false
      },

      
    ],
    isRead(title,author,read){
            return read?`Ya has leido ${title} de ${author}`:`Aún necesitas leer ${title} de ${author}`;
    }
    
}
console.log(myCollection.isRead(myCollection.books[1].title, myCollection.books[1].author, myCollection.books[1].read));