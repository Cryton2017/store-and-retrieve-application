# store-retrieve-api
This section of the repository contains the .NET API developed to store data retrieved from an outside source.

## Design Decisions:
The main design decision made for this part of the coding challenge was to enable CORS. This decision was made as the development server for Angular runs on a different port. It is understood that this can be a security risk if not set up correctly. Before moving this solution into a Production environment, the CORS rules should be reviewed and be adjusted to only allow traffic from specific outside sources.

## Design Omissions:
All requirements have been met.

## Ideas for extension:
Along with the review of CORS above, the main extension that would be recommended is the implemention of Authentication. 