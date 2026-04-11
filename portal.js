const portalData = {
    studentName: "Student",
    semester: "B.Tech CSE - Sem 4",
    attendance: [
        { subject: "Mathematics", total: 42, attended: 35, classAverage: 78 },
        { subject: "DBMS", total: 38, attended: 33, classAverage: 82 },
        { subject: "Operating Systems", total: 40, attended: 29, classAverage: 76 },
        { subject: "Computer Networks", total: 36, attended: 31, classAverage: 80 },
        { subject: "Data Structures", total: 44, attended: 39, classAverage: 84 }
    ],
    marks: [
        { subject: "Mathematics", student: 86, classAverage: 73 },
        { subject: "DBMS", student: 91, classAverage: 77 },
        { subject: "Operating Systems", student: 74, classAverage: 71 },
        { subject: "Computer Networks", student: 88, classAverage: 75 },
        { subject: "Data Structures", student: 93, classAverage: 79 }
    ],
    attendanceDistribution: {
        Mathematics: [
            { label: "40%", count: 24 },
            { label: "55%", count: 96 },
            { label: "65%", count: 457 },
            { label: "80%", count: 405 },
            { label: "90%", count: 118 }
        ],
        DBMS: [
            { label: "42%", count: 18 },
            { label: "60%", count: 121 },
            { label: "68%", count: 389 },
            { label: "82%", count: 432 },
            { label: "92%", count: 140 }
        ],
        "Operating Systems": [
            { label: "38%", count: 31 },
            { label: "52%", count: 140 },
            { label: "64%", count: 362 },
            { label: "78%", count: 351 },
            { label: "88%", count: 116 }
        ],
        "Computer Networks": [
            { label: "45%", count: 22 },
            { label: "58%", count: 128 },
            { label: "70%", count: 404 },
            { label: "84%", count: 367 },
            { label: "92%", count: 102 }
        ],
        "Data Structures": [
            { label: "48%", count: 16 },
            { label: "63%", count: 109 },
            { label: "72%", count: 386 },
            { label: "86%", count: 421 },
            { label: "94%", count: 125 }
        ]
    },
    notices: [
        { title: "Internal exam forms open", text: "Submit your form before 18 April 2026." },
        { title: "Hackathon registrations", text: "Campus innovation sprint starts next week." },
        { title: "Library reminder", text: "Return overdue books to avoid penalty." }
    ]
};

function withAttendancePercent(list) {
    return list.map((item) => {
        const percentage = Math.round((item.attended / item.total) * 100);
        return { ...item, percentage };
    });
}

function getOverview() {
    const attendance = withAttendancePercent(portalData.attendance);
    const avgAttendance = Math.round(attendance.reduce((sum, s) => sum + s.percentage, 0) / attendance.length);
    const avgMarks = Math.round(portalData.marks.reduce((sum, m) => sum + m.student, 0) / portalData.marks.length);
    const bestSubject = [...portalData.marks].sort((a, b) => b.student - a.student)[0].subject;

    return { avgAttendance, avgMarks, bestSubject };
}

function saveStudentName(name) {
    localStorage.setItem("spw_student_name", name.trim());
}

function getStudentName() {
    return localStorage.getItem("spw_student_name") || portalData.studentName;
}

function clearSession() {
    localStorage.removeItem("spw_student_name");
}

function mountNotices(containerId) {
    const node = document.getElementById(containerId);
    if (!node) {
        return;
    }

    node.innerHTML = portalData.notices.map((n) => `
        <article class="note-item">
            <strong>${n.title}</strong>
            <p class="muted">${n.text}</p>
        </article>
    `).join("");
}

function drawComparisonChart(canvasId, labels, studentData, classData, config = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        return;
    }

    const dpr = window.devicePixelRatio || 1;
    const cssWidth = canvas.clientWidth || 800;
    const cssHeight = canvas.clientHeight || 320;
    canvas.width = Math.floor(cssWidth * dpr);
    canvas.height = Math.floor(cssHeight * dpr);

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    const width = cssWidth;
    const height = cssHeight;
    const pad = { top: 26, right: 16, bottom: 56, left: 40 };
    const chartW = width - pad.left - pad.right;
    const chartH = height - pad.top - pad.bottom;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);

    const maxValue = config.max || 100;
    const groupCount = labels.length;
    const groupW = chartW / groupCount;
    const barW = Math.min(26, groupW * 0.32);

    ctx.strokeStyle = "#d8e2e8";
    ctx.lineWidth = 1;

    const yTicks = 5;
    for (let i = 0; i <= yTicks; i += 1) {
        const y = pad.top + (chartH / yTicks) * i;
        ctx.beginPath();
        ctx.moveTo(pad.left, y);
        ctx.lineTo(width - pad.right, y);
        ctx.stroke();

        const value = Math.round(maxValue - (maxValue / yTicks) * i);
        ctx.fillStyle = "#73879a";
        ctx.font = "12px sans-serif";
        ctx.fillText(String(value), 8, y + 4);
    }

    labels.forEach((label, idx) => {
        const centerX = pad.left + groupW * idx + groupW / 2;

        const studentH = (studentData[idx] / maxValue) * chartH;
        const classH = (classData[idx] / maxValue) * chartH;

        const studentX = centerX - barW - 2;
        const classX = centerX + 2;

        ctx.fillStyle = "#0f9d8f";
        ctx.fillRect(studentX, pad.top + chartH - studentH, barW, studentH);

        ctx.fillStyle = "#f05d23";
        ctx.fillRect(classX, pad.top + chartH - classH, barW, classH);

        ctx.fillStyle = "#24415e";
        ctx.font = "12px sans-serif";
        const shortLabel = label.length > 11 ? `${label.slice(0, 9)}..` : label;
        ctx.fillText(shortLabel, centerX - 26, height - 24);
    });

    ctx.strokeStyle = "#a6b4c0";
    ctx.beginPath();
    ctx.moveTo(pad.left, pad.top);
    ctx.lineTo(pad.left, height - pad.bottom + 1);
    ctx.lineTo(width - pad.right, height - pad.bottom + 1);
    ctx.stroke();

    if (config.title) {
        ctx.fillStyle = "#20384f";
        ctx.font = "600 14px sans-serif";
        ctx.fillText(config.title, pad.left, 16);
    }
}

function mountAttendanceTable(tableBodyId) {
    const tbody = document.getElementById(tableBodyId);
    if (!tbody) {
        return;
    }

    const rows = withAttendancePercent(portalData.attendance);

    tbody.innerHTML = rows.map((row) => {
        const badgeClass = row.percentage >= 80 ? "good" : "warn";
        return `
            <tr>
                <td>${row.subject}</td>
                <td>${row.total}</td>
                <td>${row.attended}</td>
                <td>${row.percentage}%</td>
                <td><span class="badge ${badgeClass}">${row.percentage >= 80 ? "On Track" : "Needs Focus"}</span></td>
            </tr>
        `;
    }).join("");
}

function mountSubjectComparison(attendanceId, marksId) {
    const subjects = portalData.attendance.map((s) => s.subject);
    const attendanceStudent = withAttendancePercent(portalData.attendance).map((s) => s.percentage);
    const attendanceClass = portalData.attendance.map((s) => s.classAverage);

    drawComparisonChart(attendanceId, subjects, attendanceStudent, attendanceClass, {
        title: "Attendance Comparison by Subject",
        max: 100
    });

    const marksStudent = portalData.marks.map((m) => m.student);
    const marksClass = portalData.marks.map((m) => m.classAverage);

    drawComparisonChart(marksId, subjects, marksStudent, marksClass, {
        title: "Marks Comparison by Subject",
        max: 100
    });
}

function drawDonutDistribution(canvasId, slices, centerTitle, centerValue) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        return;
    }

    const dpr = window.devicePixelRatio || 1;
    const cssWidth = canvas.clientWidth || 420;
    const cssHeight = canvas.clientHeight || 320;
    canvas.width = Math.floor(cssWidth * dpr);
    canvas.height = Math.floor(cssHeight * dpr);

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    const width = cssWidth;
    const height = cssHeight;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);

    const total = slices.reduce((sum, item) => sum + item.count, 0);
    const cx = width / 2;
    const cy = height / 2;
    const outerRadius = Math.min(width, height) * 0.34;
    const innerRadius = outerRadius * 0.56;
    const palette = ["#0f9d8f", "#52b3a8", "#f05d23", "#f19d7e", "#284969", "#6e89a6"];

    let start = -Math.PI / 2;
    slices.forEach((slice, index) => {
        const angle = (slice.count / total) * Math.PI * 2;
        const end = start + angle;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, outerRadius, start, end);
        ctx.closePath();
        ctx.fillStyle = palette[index % palette.length];
        ctx.fill();

        start = end;
    });

    ctx.beginPath();
    ctx.arc(cx, cy, innerRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();

    ctx.fillStyle = "#5a6e82";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(centerTitle, cx, cy - 8);

    ctx.fillStyle = "#132238";
    ctx.font = "700 26px sans-serif";
    ctx.fillText(String(centerValue), cx, cy + 18);
}

function mountSubjectAttendanceDistribution(subjectIndex, canvasId, listId, insightId) {
    const subject = portalData.attendance[subjectIndex];
    if (!subject) {
        return;
    }

    const slices = portalData.attendanceDistribution[subject.subject] || [];
    const totalStudents = slices.reduce((sum, item) => sum + item.count, 0);

    drawDonutDistribution(canvasId, slices, "Students", totalStudents);

    const list = document.getElementById(listId);
    if (list) {
        list.innerHTML = slices.map((slice) => `
            <li><strong>${slice.count}</strong> students have <strong>${slice.label}</strong> attendance.</li>
        `).join("");
    }

    const insight = document.getElementById(insightId);
    if (insight) {
        const yourAttendance = Math.round((subject.attended / subject.total) * 100);
        const classAverage = subject.classAverage;
        const delta = yourAttendance - classAverage;
        insight.innerHTML = `
            <h3>${subject.subject}</h3>
            <p class="muted" style="margin-top:6px;">Your attendance is <strong>${yourAttendance}%</strong> and class average is <strong>${classAverage}%</strong>.</p>
            <p class="muted" style="margin-top:6px;">You are ${delta >= 0 ? `${delta}% above` : `${Math.abs(delta)}% below`} class average in this subject.</p>
        `;
    }
}

window.addEventListener("resize", () => {
    if (document.getElementById("attendanceChart") || document.getElementById("marksChart")) {
        mountSubjectComparison("attendanceChart", "marksChart");
    }
    if (document.getElementById("dashAttendanceChart") || document.getElementById("dashMarksChart")) {
        mountSubjectComparison("dashAttendanceChart", "dashMarksChart");
    }
    if (document.getElementById("attendanceDonutChart") && typeof window.selectedSubjectIndex === "number") {
        mountSubjectAttendanceDistribution(window.selectedSubjectIndex, "attendanceDonutChart", "distributionList", "subjectInsight");
    }
});
