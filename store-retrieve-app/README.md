# Activities List Angular Application
This section of the repository contains the application developed using Angular 12. 

## Design Decisions:
The applicaiton was designed to be a single page CRUD applicaiton. However, the application is not able to update the data. The application consists of three clickable elements, two buttons and one list which expands as more items are added to the datastore. The first button allows you to retrieve a new item from an external API and add it to the datastore. The list then refreshes and retrieves the new item. Each item is clickable. Upon clicking an item, the details for that item are displayed to the right. Below these details, is the second button. Upon clicking this button, the item is deleted from the datastore and the list refreshes to reflect the change in data. Bootstrap was used for the UI as it offers a clean and minimalist design.

## Design Omissions:
All requirements have been met.

## Ideas for extension:
The below list provides ideas for extension in order of importance.

    1.  The ability to edit the data in the datastore.
    2.  The ability to clear all the data with a single click.
    3.  The ability to manually add data to the datastore.
    4.  User login system so that the applicaiton can be accessed from any location.