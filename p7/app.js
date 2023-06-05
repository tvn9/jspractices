// Learning Switch Statement

let stateName = prompt('Search for state name by entering first letter of statename: ');

switch (stateName) {
   case 'A':
   case 'a':
      console.log('Alabama', 'Alaska', 'Arizona', 'Akansas');
      break;
   case 'C':
   case 'c':
      console.log('Califirnia', 'Colorado', 'Connecticut');
      break;
   case 'D':
   case 'd':
      console.log('Delaware');
      break;
   case 'F':
   case 'f':
      console.log('Florida');
      break;
   case 'G':
   case 'g':
      console.log('Geogia');
      break;
   case 'H':
   case 'h':
      console.log('Hawaii');
      break;
   case 'I':
   case 'i':
      console.log('Idaho', 'Illinois', 'Indiana', 'Iowa');
      break;
   case 'K':
   case 'k':
      console.log('Kansas', 'Kentucky');
      break;
   case 'L':
   case 'l':
      console.log('Louisiana');
      break;
   case 'M':
   case 'm':
      console.log('Maine', 'Maryland', 'Massachusetts', 'Michigant', 'Michigant', 'Minesota', 'Mississippi', 'Misouri', 'Montana');
      break;
   case 'N':
   case 'n':
      console.log('Nebraska', 'Nevada', 'New Hampshire', 'New Jersy', 'New Mexico', 'New York', 'North Carolina', 'North Dakota');
      break;
   case 'O':
   case 'o':
      console.log('Ohio', 'Oklahoma', 'Oregon');
      break;
   case 'P':
   case 'p':
      console.log('Pennsylvania');
      break;
   case 'R':
   case 'r':
      console.log('Rhode Island');
      break;
   case 'S':
   case 's':
      console.log('South Carolina', 'South Dakota');
      break;
   case 'T':
   case 't':
      console.log('Tennessee', 'Texas');
      break;
   case 'U':
   case 'u':
      console.log('Utah');
      break;
   case 'V':
   case 'v':
      console.log('Vermont', 'Verginia');
      break;
   case 'W':
   case 'w':
      console.log('Washington', 'West Verginia', 'Wisconsin', 'Wyoming');
      break;
   default:
      console.log('There is no state start with', stateName);
}
