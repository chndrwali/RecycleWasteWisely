const hero = {
  title: 'Tentang Kami',
  subtitle: 'Kami berkomitmen untuk menawarkan solusi pengelolaan sampah yang inventif dalam upaya kami untuk mewujudkan lingkungan yang lebih bersih dan berkelanjutan. Kami bertekad untuk memberikan kontribusi positif bagi masyarakat dan Bumi kita yang indah melalui teknologi terkini dalam analisis gambar dan kepedulian yang mendalam terhadap lingkungan. Kami berkomitmen untuk menyediakan alat yang akan membantu Anda mengidentifikasi, mengelola, dan mendaur ulang sampah dengan lebih efisien, sehingga kita dapat bekerja sama untuk menjaga Bumi untuk generasi mendatang.',
};

const contributors = {
  title: 'Meet our team',
  developers: [
    {
      id: 0,
      name: 'Candra Wali Sanjaya',
      title: 'Front End Developer',
      image: '/img/contributors/candra.webp',
      alt: 'Candra Wali Sanjaya',
      socials: {
        linkedin: 'https://www.linkedin.com/in/chndrwali/',
        github: 'https://github.com/chndrwali',
        instagram: 'https://instagram.com/chndrwali',
        twitter: 'https://twitter.com/chndrwali',
      },
    },
    {
      id: 1,
      name: 'Anita Nur Kirana',
      title: 'Machine Learning Developer',
      image: '/img/contributors/intan.webp',
      alt: 'Anita Nur Kirana',
      socials: {
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://instagram.com/anitakrnaa_',
      },
    },
    {
      id: 2,
      name: 'Hartsa Arroka Firdaus',
      title: 'Technical Writer',
      image: '/img/contributors/hartsa.webp',
      alt: 'Hartsa Arroka Firdaus',
      socials: {
        linkedin: 'https://www.linkedin.com/in/hartsarroka/',
        github: 'https://github.com/',
        instagram: 'https://instagram.com/harsarroka',
      },
    },
    {
      id: 3,
      name: 'Amulistia',
      title: 'UI UX Design',
      image: '/img/contributors/amulistia.webp',
      alt: 'Amulistia',
      socials: {
        linkedin: 'https://id.linkedin.com/in/amulistia-undefined-009045295',
        github: 'https://github.com/Amulistia',
        instagram: 'https://instagram.com/amulistia9',
      },
    },
    {
      id: 4,
      name: 'Wina Yulianti',
      title: 'Data Engineer',
      image: '/img/contributors/wina.webp',
      alt: 'Wina Yulianti',
      socials: {
        linkedin: 'https://www.linkedin.com/in/wina-yulianti-a55007283/',
        github: 'https://github.com/chndrwali',
        instagram: 'https://instagram.com/i.niiwinaa',
      },
    },
  ],
};

const techStack = {
  title: 'Teknologi yang digunakan',
  subtitle: 'Aplikasi ini dibuat menggunakan beberapa teknologi yang membantu proses pembuatan.',
  techs: [
    {
      id: 0,
      name: 'Python',
      type: 'Programming Language',
      image: '/img/techstack/python.webp',
      url: 'https://www.python.org/',
    },
    {
      id: 1,
      name: 'TensorFlow',
      type: 'Machine Learning Library',
      image: '/img/techstack/tensorflow.webp',
      url: 'https://www.tensorflow.org/',
    },
    {
      id: 2,
      name: 'TensorFlow.js',
      type: 'Machine Learning Library',
      image: '/img/techstack/tensorflowjs.webp',
      url: 'https://www.tensorflow.org/js',
    },
    {
      id: 3,
      name: 'Keras',
      type: 'Deep Learning Library',
      image: '/img/techstack/keras.webp',
      url: 'https://keras.io/',
    },
    {
      id: 4,
      name: 'JavaScript',
      type: 'Programming Language',
      image: '/img/techstack/javascript.webp',
      url: 'https://www.javascript.com/',
    },
    {
      id: 5,
      name: 'React',
      type: 'Front-End Library',
      image: '/img/techstack/react.webp',
      url: 'https://reactjs.org/',
    },
    {
      id: 6,
      name: 'Tailwind CSS',
      type: 'CSS Framework',
      image: '/img/techstack/tailwindcss.webp',
      url: 'https://tailwindcss.com/',
    },
    {
      id: 7,
      name: 'NPM',
      type: 'Package Manager',
      image: '/img/techstack/npm.webp',
      url: 'https://www.npmjs.com/',
    },
    {
      id: 8,
      name: 'Git',
      type: 'Version Control',
      image: '/img/techstack/git.webp',
      url: 'https://git-scm.com/',
    },
    {
      id: 9,
      name: 'GitHub',
      type: 'Version Control Hosting',
      image: '/img/techstack/github.webp',
      url: 'https://github.com',
    },
    {
      id: 10,
      name: 'Vercel',
      type: 'Cloud Platform',
      image: '/img/techstack/vercel.webp',
      url: 'https://vercel.com/',
    },
    {
      id: 11,
      name: 'Kaggle',
      type: 'Dataset Platform',
      image: '/img/techstack/kaggle.webp',
      url: 'https://www.kaggle.com/',
    },
    {
      id: 12,
      name: 'Google Colab',
      type: 'Notebook IDE',
      image: '/img/techstack/google-colab.webp',
      url: 'https://colab.research.google.com/',
    },
    {
      id: 13,
      name: 'Visual Studio Code',
      type: 'IDE',
      image: '/img/techstack/vscode.webp',
      url: 'https://code.visualstudio.com/',
    },
    {
      id: 14,
      name: 'Figma',
      type: 'Design Tool',
      image: '/img/techstack/figma.webp',
      url: 'https://www.figma.com/',
    },
  ],
};

const credits = {
  title: 'Sumber Daya Lainnya',
  subtitle: 'Beberapa sumber daya tambahan yang dapat digunakan untuk membantu dalam pengembangan aplikasi ini.',
  resources: [
    {
      title: 'Datasets',
      text: 'Kaggle Garbage Classification (12 classes)',
      url: 'https://www.kaggle.com/mostafaabla/garbage-classification',
    },
    {
      title: 'Pre-trained Model',
      text: 'MobileNetV2',
      url: 'https://www.tensorflow.org/api_docs/python/tf/keras/applications/mobilenet_v2/MobileNetV2',
    },
    {
      title: 'Color Palette',
      text: 'Generate from Color Hunt',
      url: 'https://colorhunt.co/',
    },
    {
      title: 'Icons',
      text: 'Font Awesome',
      url: 'https://fontawesome.com/',
    },
    {
      title: '3D Illustration',
      text: 'Icons8',
      url: 'https://icons8.com/illustrations',
    },
    {
      title: 'Image Creator',
      text: 'Bing AI Image Generator',
      url: 'https://www.bing.com/images/create?',
    },
  ],
};

export {
  hero, contributors, techStack, credits,
};