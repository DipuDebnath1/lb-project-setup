import { Request, Response } from "express";
import { studentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;

    const result = await studentServices.createStudentDB(student);

    res.status(200).json({
      success: true,
      message: "student created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentDB();

    res.status(200).json({
      success: true,
      message: "student retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getAStudentDB(studentId);
    res.status(200).json({
      success: true,
      message: "single student find successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudent,
  getAStudent,
};
