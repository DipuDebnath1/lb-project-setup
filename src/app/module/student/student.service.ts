import { StudentModel } from "../student.model";
import { Student } from "./student.interface";

const createStudentDB = async (student: Student) => {
  const res = await StudentModel.create(student);
  return res;
};
const getAllStudentDB = async () => {
  const res = await StudentModel.find();
  return res;
};

const getAStudentDB = async (id: string) => {
  const res = await StudentModel.findOne({ id });
  return res;
};

export const studentServices = {
  createStudentDB,
  getAllStudentDB,
  getAStudentDB,
};
