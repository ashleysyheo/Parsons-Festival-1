var programs = { 
    adht: {
        fashionStudies: {
            departmentName:'Fashion Studies',
            numOfPrograms: 1,
            program: ['MA Fashion Studies'],
            img: ['adht.png'],
        },
        curatorialStudies: {
            departmentName: 'History of Design and Curatorial Studies',
            numOfPrograms: 1,
            program: ['MA History of Design and Curatorial Studies'],
            img: ['adht.png'],
        },
    }, 
    amt: {
        communicationDesign: {
            departmentName:'Communication Design',
            numOfPrograms: 3,
            program: ['AAS Communication Design', 'BFA Communication Design', 'MPS Communication Design'],
            img: ['commd_aas.png', 'commd_bfa.png', 'commd_mps.png'],
        },
        dataVisualization: {
            departmentName: 'Data Visualization',
            numOfPrograms: 1,
            program: ['MS Data Visualization'],
            img: ['data-vis_ms.png'],
        },
        designAndTechnology: {
            departmentName: 'Design & Technology',
            numOfPrograms: 2,
            program: ['BFA Design & Technology', 'MFA Design & Technology'],
            img: ['dt.png', 'dt.png'],
        },
        fineArts: {
            departmentName: 'Fine Arts',
            numOfPrograms: 2,
            program: ['BFA Fine Arts', 'MFA Fine Arts'],
            img: ['fine-arts_bfa.png', 'fine-arts_mfa.png'],
        },
        illustration: {
            departmentName: 'Illustration',
            numOfPrograms: 1,
            program: ['BFA Illustration'],
            img: ['illustration_bfa.png'],
        },
        photography: {
            departmentName: 'Photography',
            numOfPrograms: 1,
            program: ['BFA Photography'],
            img: ['photography_bfa.png'],
        },
    }, 
    cone: {
        architecture: {
            departmentName:'Architecture',
            numOfPrograms: 1,
            program: ['M.Arch Architecture'],
            img: ['dt.png'],
        },
        architecturalDesign: {
            departmentName: 'Architectural Design',
            numOfPrograms: 1,
            program: ['BFA Architectural Design'],
            img: ['dt.png'],
        },
        industrialDesign: {
            departmentName: 'Industrial Design',
            numOfPrograms: 1,
            program: ['MFA Industrial Design'],
            img: ['dt.png'],
        },
        interiorDesign: {
            departmentName: 'Interior Design',
            numOfPrograms: 3,
            program: ['AAS Interior Design', 'BFA Interior Design', 'MFA Interior Design'],
            img: ['dt.png', 'dt.png', 'dt.png'],
        },
        lightingDesign: {
            departmentName: 'Lighting Design',
            numOfPrograms: 1,
            program: ['MFA Lighting Design'],
            img: ['dt.png'],
        },
        productDesign: {
            departmentName: 'Product Design',
            numOfPrograms: 1,
            program: ['BFA Lighting Design'],
            img: ['dt.png'],
        },
    }, 
    dess: {
        integratedDesign: {
            departmentName: 'Integrated Design',
            numOfPrograms: 1,
            program: ['BFA Integrated Design'],
            img: ['dt.png'],
        }, 
        strategicDesign: {
            departmentName: 'Strategic Design and Management',
            numOfPrograms: 2,
            program: ['BBA Strategic Design and Management', 'MS Strategic Design and Management'],
            img: ['dt.png', 'dt.png'],
        },
        transdisciplinaryDesign: {
            departmentName: 'Transdisciplinary Design',
            numOfPrograms: 1,
            program: ['MFA Transdisciplinary Design'],
            img: ['dt.png'],
        },
    },
    fash: {
        fashionDesign: {
            departmentName: 'Fashion Design',
            numOfPrograms: 2,
            program: ['AAS Fashion Design','BFA Fashion Design'],
            img: ['dt.png', 'dt.png'],
        }, 
        fashionSociety: {
            departmentName: 'Fashion Design and Society',
            numOfPrograms: 1,
            program: ['MFA Fashion Design and Society'],
            img: ['dt.png'],
        },
        fashionManagement: {
            departmentName: 'Fashion Management',
            numOfPrograms: 1,
            program: ['MPS Fashion Management'],
            img: ['dt.png'],
        },
        fashionMarketing: {
            departmentName: 'Fashion Marketing',
            numOfPrograms: 1,
            program: ['AAS Fashion Marketing'],
            img: ['dt.png'],
        },
        fashionCommunication: {
            departmentName: 'Fashion Marketing and Communication',
            numOfPrograms: 1,
            program: ['AAS Fashion Marketing and Communication'],
            img: ['dt.png'],
        },
        textiles: {
            departmentName: 'Textiles',
            numOfPrograms: 1,
            program: ['MFA Textiles'],
            img: ['dt.png'],
        },
    }
}


const filter = self => {
    let exhibition = self.parentElement.parentElement;

    let school = self.className.slice(16, 20).trim();
    let id = self.id;
    let department = programs[school][id];
    let parent = self.parentElement;
    let programContainer = exhibition.querySelector('.program-container');
    programContainer.innerHTML = '';
    console.log(programContainer);

    // set active status for filter 
    let departmentNames = parent.querySelectorAll('.department-name');
    departmentNames.forEach(ele => {
        if (ele.id !== department) {
            ele.classList.remove(`${school}--active`);
        }
    })

    self.classList.add(`${school}--active`);



    for (let i=0; i < department.numOfPrograms; i++) {
        let program = document.createElement('div');
        program.className = 'program';
        programContainer.appendChild(program);

        if (i > 0 && i % 2 === 0) {
            program.classList.add('margin-right--none');
        }

        let imgContainer = document.createElement('div');
        imgContainer.className = 'img-container';
        program.appendChild(imgContainer);

        let img = document.createElement('img');
        img.src = `images/${department.img[i]}`;
        imgContainer.appendChild(img);

        let captionContainer = document.createElement('div');
        captionContainer.className = 'caption-container';
        imgContainer.appendChild(captionContainer);

        let caption = document.createElement('h6');
        caption.className = 'caption';
        caption.innerHTML = department.program[i];
        captionContainer.appendChild(caption);

        let programHover = document.createElement('div');
        programHover.className = 'program--hover';
        program.appendChild(programHover);

        let hoverText = document.createElement('div');
        hoverText.className = `hover-text ${school}--color`;
        programHover.appendChild(hoverText);

        let hoverTextH4 = document.createElement('h4');
        hoverTextH4.innerHTML = department.program[i];
        hoverText.appendChild(hoverTextH4);

        let hoverTextH5 = document.createElement('h5');
        hoverTextH5.innerHTML = 'Visit Show';
        hoverText.appendChild(hoverTextH5);




        console.log(program);
        console.log(i);
    }

    console.log(programContainer);
    // let program = 



    // let program = self.parentElement;

    // let caption = program.querySelector('.caption');
    // caption.innerHTML = department.program;

    // let hoverText = program.querySelector('.hover-text');
    // hoverText.querySelector('h4').innerHTML = department.program;

    // let img = program.querySelector('img');
    // img.src = `images/${department.img}`;
}

