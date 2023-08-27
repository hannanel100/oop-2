// את כל הקוד שלכם את כותבים כאן!

// 1. Person
abstract class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getInfo() {
    return `Person ${this.firstName} ${this.lastName}`;
  }
}

// 2. Patient
class Patient extends Person {
  patientId: number;
  constructor(firstName: string, lastName: string, patientId: number) {
    super(firstName, lastName);
    this.patientId = patientId;
  }
  getInfo() {
    return `Patient ${this.firstName} ${this.lastName} with id ${this.patientId}`;
  }
}
// 3. Doctor
class Doctor extends Person {
  doctorId: number;
  specialization: string;
  constructor(
    firstName: string,
    lastName: string,
    doctorId: number,
    specialization: string
  ) {
    super(firstName, lastName);
    this.doctorId = doctorId;
    this.specialization = specialization;
  }
  getInfo() {
    return `Doctor ${this.firstName} ${this.lastName} with id ${this.doctorId} is a ${this.specialization}`;
  }
}
// type for time in HH:MM format
type Time = string;

// 4. Appointment
class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: Date;
  time: Time;
  constructor(patient: Patient, doctor: Doctor, date: Date, time: string) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
  }
  getInfo() {
    return `Appointment for ${this.patient.firstName} ${this.patient.lastName} with doctor ${this.doctor.firstName} ${this.doctor.lastName} at ${this.date} ${this.time}`;
  }
}
// 5. Hospital
class Hospital {
  name: string;
  #doctors: Doctor[];
  #patients: Patient[];
  #appointments: Appointment[];

  constructor(name: string) {
    this.name = name;
    this.#doctors = [];
    this.#patients = [];
    this.#appointments = [];
  }

  addDoctor(doctor: Doctor) {
    this.#doctors.push(doctor);
  }

  addPatient(patient: Patient) {
    this.#patients.push(patient);
  }

  addAppointment(appointment: Appointment) {
    this.#appointments.push(appointment);
  }
  getAppointments() {
    return this.#appointments;
  }
  getDoctorsAppointments(doctorId: number) {
    return this.#appointments.filter(
      (appointment) => appointment.doctor.doctorId === doctorId
    );
  }
  getPatientsAppointments(patientId: number) {
    return this.#appointments.filter(
      (appointment) => appointment.patient.patientId === patientId
    );
  }
  getTodaysAppointments() {
    return this.#appointments.filter(
      (appointment) =>
        appointment.date.toLocaleDateString === new Date().toLocaleDateString
    );
  }
}

// 6. Create a new hospital

const hospital = new Hospital("Hadassah");

// 7. Create a new doctor

const doctor1 = new Doctor("John", "Doe", 1, "Surgeon");

// 8. Add the doctor to the hospital

hospital.addDoctor(doctor1);

// 9. Create a new patient

const patient1 = new Patient("Jane", "Doe", 1);

// 10. Add the patient to the hospital

hospital.addPatient(patient1);

// 11. Create a new appointment

const appointment1 = new Appointment(patient1, doctor1, new Date(), "10:00");

// 12. Add the appointment to the hospital

hospital.addAppointment(appointment1);

// 13. Get all appointments

console.log(
  `hospital.getAppointment: ${JSON.stringify(hospital.getAppointments())}`
);

// 14. Get all doctors appointments

console.log(
  `hospital.getDoctorsAppointments: ${JSON.stringify(
    hospital.getDoctorsAppointments(1)
  )}`
);

// 15. Get all patients appointments

console.log(
  `hospital.getPatientsAppointments(1): ${JSON.stringify(
    hospital.getPatientsAppointments(1)
  )}`
);

// 16. Get all appointments for today

console.log(
  `hospital.getTodaysAppointments(): ${JSON.stringify(
    hospital.getTodaysAppointments()
  )}`
);

// 17. Get doctor info

console.log(`doctor1.getDoctorInfo(): ${JSON.stringify(doctor1.getInfo())}`);

// 18. Get appointment info

console.log(`appointment1.getAppointmentInfo(): ${appointment1.getInfo()}`);

// 19. Get patient id

console.log(`patient1.getPatientId(): ${patient1.getInfo()}`);

// 20. Get hospital name

console.log(`hospital.name: ${hospital.name}`);

// 21. Get doctor name

console.log(`doctor1.firstName: ${doctor1.firstName}`);
