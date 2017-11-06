// Security token  d9a47850-0cb7-4551-b127-e21caa7425d3
import Email from 'smtp'

Email.send("ababich.dev@gmail.com",
  "to@them.com",
  "This is a subject",
  "this is the body",
  {token: "d9a47850-0cb7-4551-b127-e21caa7425d3"});

