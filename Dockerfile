FROM nginx

COPY index.html \Users\armwo\Documents\GitHub\project-01
COPY style.css \Users\armwo\Documents\GitHub\project-01\css
COPY main.js \Users\armwo\Documents\GitHub\project-01\js

CMD ["nginx", "-g", "daemon off;"]
