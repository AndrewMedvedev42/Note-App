# Note App

Make, edit and store notes. Made with React. Supported with Firebase Realtime Database

## About project:

In this project, I used React because I can create a much better layout, easy control state, and use self-made.
Since the beginning, I used localstorage to store data of the notes, but I thought that using localstorage won't be effective since I needed 
quick updates of note list without reloading of a page, so I used Firebase real-time database for more efficient storing and managing of data.

On the main page, the title of the created note is supported with [React-Textfit](https://www.npmjs.com/package/react-textfit) to allow flexible title depending on a title length.

When a user is located on the main page, the user can copy the text of one of his/her existing notes.

If the user wants to remove one of his/her notes. There is a "trash bin" icon, at the right bottom corner of the note slot, to delete chosen notes. Notice: After deleting the note, the note will be deleted forever, and can't be restored!

To edit the note, the user can click the "pen" icon, at the right bottom corner of the note slot, to edit the title and inner text of the note. Once the user is making changes to the note title or inner text, the changes will be updated automatically.

For icons, I used the "react-icons" library.

### Styles
As a method for styling, I used styled-components and SASS to make the style process more stabilized.