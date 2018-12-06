const { db } = require('./server/db')
const { green, red } = require('chalk')
const Student = require('./server/db/students');
const Campus = require('./server/db/campuses');

const campuses = [
  {
    name: 'Earth',
    address: 'Third Rock from the Sun',
    imageUrl: 'https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/article_bulletin/multimedia/62_1_noaa_4.jpg',
    description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago. Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times."
  },
  {
    name: 'Luna',
    address: 'Orbiting Earth',
    imageUrl: 'https://www.nps.gov/ever/learn/nature/images/FullMoon_1.jpg?maxwidth=650&autorotate=false',
    description: "The Moon is an astronomical body that orbits planet Earth and is Earth's only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). The Moon is, after Jupiter's satellite Io, the second-densest satellite in the Solar System among those whose densities are known."
  },
  {
    name: 'Mars',
    address: 'Fourth Planetary Orbit',
    imageUrl: 'https://www.nasa.gov/specials/60counting/img/mars.jpg',
    description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the 'Red Planet' because the reddish iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth."
  }
]

const students = [
  {
    firstName: 'Michael',
    lastName: 'Lee',
    email: 'mlee@example.com',
    imageUrl: 'https://c.pxhere.com/photos/8a/5c/girl_guitar_violin_music_student_sound_color_music_students-827933.jpg!d',
    gpa: 2.5,
    campusId: 1
  },
  {
    firstName: 'Logan',
    lastName: 'Zhang',
    email: 'lzhang@example.com',
    imageUrl: 'https://svgsilh.com/svg/1524010.svg',
    gpa: 1.7,
    campusId: 1
  },
  {
    firstName: 'Avery',
    lastName: 'Wang',
    email: 'awang@example.com',
    imageUrl: 'https://www.maxpixel.net/static/photo/2x/Schoolgirl-Book-Student-Study-Teenager-Learning-147783.png',
    gpa: 3.8,
    campusId: 1
  },
  {
    firstName: 'Carter',
    lastName: 'Nguyen',
    email: 'cnguyen@example.com',
    imageUrl: 'https://www.maxpixel.net/static/photo/2x/Child-I-Am-A-Student-3272954.png',
    gpa: 2.9,
    campusId: 2
  },
  {
    firstName: 'Madison',
    lastName: 'Garcia',
    email: 'mgarcia@example.com',
    imageUrl: 'https://www.maxpixel.net/static/photo/2x/Computer-Icon-Application-Business-Communication-1260535.jpg',
    gpa: 3.6,
    campusId: 2
  },
  {
    firstName: 'Riley',
    lastName: 'Gonzalez',
    email: 'rgonzalez@example.com',
    imageUrl: 'https://svgsilh.com/svg/154338.svg',
    gpa: 4.0,
    campusId: 2
  },
  {
    firstName: 'Cameron',
    lastName: 'Hernandez',
    email: 'chernandez@example.com',
    imageUrl: 'https://svgsilh.com/svg/1300226.svg',
    gpa: 0.9,
    campusId: 3
  },
  {
    firstName: 'Adrian',
    lastName: 'Smith',
    email: 'asmith@example.com',
    imageUrl: 'https://www.maxpixel.net/static/photo/2x/Work-Computer-Screen-Working-On-Computer-Computer-3241351.jpg',
    gpa: 2.9,
    campusId: 3
  },
  {
    firstName: 'Tyler',
    lastName: 'Smirnov',
    email: 'tsmirnov@example.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Mad_scientist.svg',
    gpa: 3.8,
    campusId: 3
  }
]

const seed = async () => {
  await db.sync({ force: true })

  // seed your database here!
  await Promise.all(campuses.map(campus =>
    Campus.create(campus))
  );
  await Promise.all(students.map(student =>
    Student.create(student))
  );

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
