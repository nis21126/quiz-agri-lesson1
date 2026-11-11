// ชุดคำถาม 15 ข้อ จากบทเรียนบทที่ 1 บทนำและความสำคัญของการเกษตรในชีวิตประจำวัน
const questions = [
    {
        question: "1. คำว่า 'Agriculture' มีรากศัพท์มาจากภาษากรีก โดยคำว่า 'Agri' หรือ 'Ager' มีความหมายตรงกับข้อใด?",
        options: [
            "ทุ่ง หรือ ดิน",
            "การเพาะปลูก หรือ ปฏิบัติ",
            "ต้นไม้ หรือ ป่าไม้",
            "ผลผลิต หรือ การเก็บเกี่ยว"
        ],
        correct: 0
    },
    {
        question: "2. ข้อใดอธิบายความหมายของการเกษตรกรรม (Agriculture) ได้ถูกต้องและครอบคลุมที่สุดตามแนวคิดวิทยาศาสตร์ประยุกต์?",
        options: [
            "การไถพรวนดินและจับสัตว์น้ำในแหล่งน้ำธรรมชาติเท่านั้น",
            "การใช้ประโยชน์หรือกระบวนการสร้างผลผลิตจากผืนดินอย่างเป็นระบบ ทั้งการปลูกพืชและการเลี้ยงสัตว์",
            "การขายเครื่องจักรกลการเกษตรเพื่อการส่งออกต่างประเทศ",
            "การแปรรูปผลผลิตอุตสาหกรรมในโรงงานขนาดใหญ่"
        ],
        correct: 1
    },
    {
        question: "3. กิจกรรมในข้อใดจัดอยู่ในขอบข่ายงานเกษตรกรรมประเภท 'กสิกรรม'?",
        options: [
            "การจับสัตว์น้ำและการเลี้ยงกุ้งในกระชัง",
            "การทำนา การทำสวน และการทำไร่",
            "การเลี้ยงสัตว์ใหญ่และการทำปศุสัตว์",
            "การปลูกไม้เศรษฐกิจและการทำป่าไม้"
        ],
        correct: 1
    },
    {
        question: "4. การปลูกบอนไซ การเลี้ยงปลาสวยงาม และการจัดสวนถาด จัดเป็นความสำคัญของการเกษตรในด้านใด?",
        options: [
            "ปัจจัยพื้นฐานด้านการดำรงชีวิต",
            "การส่งออกเพื่อแข่งขันกับต่างประเทศ",
            "การพักผ่อนหย่อนใจและงานอดิเรก",
            "การสร้างพลังงานชีวมวลทดแทน"
        ],
        correct: 2
    },
    {
        question: "5. 'การท่องเที่ยวที่ไม่รบกวนธรรมชาติ มุ่งเน้นการศึกษา ทัศนียภาพ และสร้างโอกาสทางเศรษฐกิจเพื่อการอนุรักษ์' คือนิยามของข้อใด?",
        options: [
            "การท่องเที่ยวเชิงเกษตร",
            "การท่องเที่ยวเชิงนิเวศ (Ecotourism)",
            "การท่องเที่ยวเชิงอุตสาหกรรม",
            "การท่องเที่ยวเชิงวัฒนธรรมพื้นบ้าน"
        ],
        correct: 1
    },
    {
        question: "6. พลังงานทดแทนประเภทใดที่ผลิตได้จากซากพืช มูลสัตว์ และการผลิตถ่าน?",
        options: [
            "พลังงานนิวเคลียร์",
            "พลังงานชีวมวล (Biomass)",
            "พลังงานความร้อนใต้ภิภพ",
            "พลังงานปิโตรเลียมสังเคราะห์"
        ],
        correct: 1
    },
    {
        question: "7. ระบบ 'วนเกษตร' (Agroforestry) เกิดขึ้นจากวัตถุประสงค์หลักในข้อใดเป็นสำคัญ?",
        options: [
            "เพื่อแก้ปัญหาการตัดไม้ทำลายป่าและเร่งฟื้นฟูความสมดุลของระบบนิเวศป่าไม้",
            "เพื่อเน้นการแปรรูปไม้ส่งออกโรงงานอุตสาหกรรมขนาดใหญ่",
            "เพื่อสร้างฟาร์มเลี้ยงสัตว์ปีกในพื้นที่ปิด",
            "เพื่อใช้สารเคมีสังเคราะห์ในการเร่งการเจริญเติบโตของไม้ผล"
        ],
        correct: 0
    },
    {
        question: "8. ข้อใดคือรูปแบบของวนเกษตรที่มีการรวมปัจจัย 3 อย่าง ได้แก่ การผลิตปศุสัตว์ การปลูกป่า และการทำนาไร่ เข้าด้วยกัน?",
        options: [
            "Agrisylvicultural system (ปลูกป่า-นาไร่)",
            "Sylvopastoral system (ปลูกป่า-หญ้าเลี้ยงสัตว์)",
            "Agrosylvopastoral system (เลี้ยงสัตว์-ปลูกป่า-นาไร่)",
            "Monoculture system (เกษตรเชิงเดี่ยว)"
        ],
        correct: 2
    },
    {
        question: "9. ข้อใดคือจุดประสงค์หลักของการทำ 'เกษตรผสมผสาน' (Integrated Farming)?",
        options: [
            "การปลูกพืชชนิดเดียวในพื้นที่ขนาดใหญ่เพื่อเก็งกำไรสูงสุด",
            "การทำกิจกรรมเกษตรตั้งแต่ 2 ชนิดขึ้นไปในพื้นที่และเวลาเดียวกันเพื่อให้เกิดการเกื้อกูลกัน",
            "การใช้เครื่องจักรกลขนาดใหญ่ทดแทนแรงงานคนทั้งหมด",
            "การพึ่งพาปัจจัยการผลิตและสารเคมีจากภายนอกฟาร์ม"
        ],
        correct: 1
    },
    {
        question: "10. หลักการสำคัญ 4 ประการของเกษตรธรรมชาติ (Natural Farming) ตามแนวคิดของ 'มาซาโนบุ ฟูกูโอกะ' ได้แก่อะไรบ้าง?",
        options: [
            "ไม่ไถพรวน, ไม่ใช้ปุ๋ยเคมี, ไม่กำจัดวัชพืช, ไม่ใช้สารเคมีและยาฆ่าแมลง",
            "ไถพรวนลึก, ใส่ปุ๋ยเคมี, กำจัดวัชพืชด้วยยา, ฉีดพ่นสารเคมี",
            "ปลูกพืชเดี่ยว, ใช้เครื่องจักรใหญ่, ตัดแต่งกิ่ง, ให้ปุ๋ยเร่งดอก",
            "ขุดสระน้ำ 30%, ปลูกข้าว 30%, ปลูกพืช 30%, ที่อยู่อาศัย 10%"
        ],
        correct: 0
    },
    {
        question: "11. แนวคิดเกษตรกรรมยั่งยืน (Sustainable Agriculture) ต้องครอบคลุมความยั่งยืนใน 3 ด้านใดบ้าง?",
        options: [
            "ด้านการค้า, ด้านอุตสาหกรรม, ด้านการขนส่ง",
            "ด้านเศรษฐกิจ, ด้านสิ่งแวดล้อม, ด้านสังคม",
            "ด้านการเมือง, ด้านเทคโนโลยี, ด้านนวัตกรรม",
            "ด้านปศุสัตว์, ด้านประมง, ด้านกสิกรรม"
        ],
        correct: 1
    },
    {
        question: "12. เกษตรกรรมแบบอินทรีย์ (Organic Farming) มีแนวทางปฏิบัติที่ชัดเจนในข้อใด?",
        options: [
            "เน้นการใช้ปุ๋ยเคมีสูตรเข้มข้นร่วมกับสารเร่งโต",
            "ปฏิเสธการใช้สารเคมีสังเคราะห์ สารกำจัดศัตรูพืช และใช้วิธีทางชีวภาพ/ธรรมชาติปรับปรุงดิน",
            "ฉีดพ่นสารเคมีก่อนการเก็บเกี่ยว 3 วัน",
            "ใช้เมล็ดพันธุ์ดัดแปรพันธุกรรม (GMOs) เพื่อต่อต้านแมลง"
        ],
        correct: 1
    },
    {
        question: "13. ระบบมาตรฐาน GAP (Good Agricultural Practices) จัดอยู่ในรูปแบบเกษตรกรรมประเภทใด?",
        options: [
            "เกษตรกรรมแบบผลิตพอยังชีพ",
            "เกษตรกรรมแบบปลอดภัยจากสารพิษ",
            "เกษตรกรรมแบบธรรมชาติตามป่าเขา",
            "วนเกษตรแบบดั้งเดิม"
        ],
        correct: 1
    },
    {
        question: "14. ตามแนวทาง 'เกษตรทฤษฎีใหม่' มีการจัดสรรสัดส่วนพื้นที่ขนาด 10-15 ไร่ นอกเขตชลประทานอย่างไร?",
        options: [
            "ขุดสระน้ำ 50%, ทำนา 20%, ปลูกพืช 20%, ที่อยู่อาศัย 10%",
            "ขุดสระน้ำ 30%, ปลูกพืช/ไม้ผล 30%, ทำนา 30%, ที่อยู่อาศัย 10%",
            "ขุดสระน้ำ 10%, ปลูกพืช/ไม้ผล 40%, ทำนา 40%, ที่อยู่อาศัย 10%",
            "ทำนา 70%, ปลูกพืช 20%, ที่อยู่อาศัย 10%"
        ],
        correct: 1
    },
    {
        question: "15. วัตถุประสงค์แรกเริ่มและสำคัญที่สุดของ 'เกษตรทฤษฎีใหม่' คือเรื่องใด?",
        options: [
            "การสร้างความมั่นคงทางด้านอาหารและการจัดการทรัพยากรน้ำในระดับครัวเรือน",
            "การผลิตสินค้าเกษตรเพื่อส่งออกตลาดต่างประเทศเป็นหลัก",
            "การนำเครื่องจักรกลทันสมัยมาใช้ในพื้นที่ขนาดย่อย",
            "การจัดตั้งโรงงานแปรรูปสินค้าเกษตรชุมชน"
        ],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let studentId = "";
let studentName = "";

function startQuiz() {
    studentId = document.getElementById("student-id").value.trim();
    studentName = document.getElementById("student-name").value.trim();

    if (!studentId || !studentName) {
        alert("กรุณากรอกรหัสนิสิตและชื่อ-นามสกุลให้ครบถ้วน");
        return;
    }

    document.getElementById("start-screen").classList.remove("active");
    document.getElementById("quiz-screen").classList.add("active");
    showQuestion();
}

function showQuestion() {
    selectedOption = null;
    const q = questions[currentQuestionIndex];
    document.getElementById("question-number").innerText = `ข้อที่ ${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById("question-text").innerText = q.question;
    
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => selectOption(idx, btn);
        optionsContainer.appendChild(btn);
    });

    document.getElementById("next-btn").disabled = true;
}

function selectOption(idx, btnElement) {
    selectedOption = idx;
    document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
    btnElement.classList.add("selected");
    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    if (selectedOption === questions[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        submitResults();
    }
}

function submitResults() {
    document.getElementById("quiz-screen").classList.remove("active");
    document.getElementById("end-screen").classList.add("active");

    // Google Form Response URL ของอาจารย์
    const FORM_URL = "[https://docs.google.com/forms/d/e/1FAIpQLSdSFXbV7dI-8hHw5cvJPX2fO-p00BGPnuzuNqh2KJox-jjgDg/formResponse]";
    
    const formData = new FormData();
    formData.append("entry.366113943", studentId);   // ส่งรหัสนิสิต
    formData.append("entry.1704288001", studentName); // ส่งชื่อ-นามสกุล
    formData.append("entry.1018595864", `${score}/${questions.length}`); // ส่งคะแนน เช่น 12/15

    // ส่งข้อมูลแบบเบื้องหลัง (Background Post) โดยไม่เปิดหน้า Google Form
    fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData
    }).then(() => {
        console.log("บันทึกคะแนนเข้า Google Form เรียบร้อยแล้ว");
    }).catch(err => console.error("Error submitting quiz:", err));
}
