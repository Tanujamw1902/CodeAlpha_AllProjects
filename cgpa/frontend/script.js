function goHome() {
    window.location.href = "../../index.html";
}

const makeBtn = document.getElementById('make');
const coursesDiv = document.getElementById('courses');

makeBtn.onclick = ()=>{
    const n = parseInt(document.getElementById('n').value)||0;
    coursesDiv.innerHTML='';
    for(let i=0;i<n;i++){
        const d = document.createElement('div');
        d.className='course';
        d.innerHTML = `
          <label>Course ${i+1} Grade:
            <select class="grade">
              <option value="10">A+</option>
              <option value="9">A</option>
              <option value="8">B+</option>
              <option value="7">B</option>
              <option value="6">C</option>
              <option value="5">D</option>
              <option value="0">F</option>
            </select>
          </label>
          <label>Credit hours:
            <input type="number" class="credit" min="0" value="3"/>
          </label>
        `;
        coursesDiv.appendChild(d);
    }
};
document.getElementById('calc').onclick = ()=>{
    const grades = [...document.querySelectorAll('.grade')].map(s=>+s.value);
    const credits = [...document.querySelectorAll('.credit')].map(i=>+i.value);
    let totalC=0, totalGP=0;
    for(let i=0;i<grades.length;i++){
        totalC += credits[i];
        totalGP += grades[i]*credits[i];
    }
    const gpa = totalGP/totalC || 0;
    let out = `Total Credits: ${totalC}\nSemester GPA: ${gpa.toFixed(2)}\n\nIndividual courses:\n`;
    for(let i=0;i<grades.length;i++){
        out += `Course ${i+1} — Grade points: ${grades[i]}, Credits: ${credits[i]}\n`;
    }
    document.getElementById('result').innerText = out;
};
makeBtn.click(); // auto generate inputs
