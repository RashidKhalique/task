import form from "../model/form.model.js";
import mongoose from "mongoose";

const createForm = async (req, res) => {
    try {
        const { data } = req.body;
        console.log(data);
        
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ 
                success: false, 
                message: "Form data is required." 
            });
        }
        const savedForm = await form.create(data);

        res.status(201).json({ 
            success: true, 
            message: "Form created successfully.", 
            data: savedForm 
        });
    } catch (error) {
        console.error("Error creating form:", error.message);
        res.status(500).json({ 
            success: false, 
            message: "An internal server error occurred.", 
            error: error.message 
        });
    }
};

const viewallform = async (req, res) => {
    try {
        const formdata = await form.find().lean();

        if (!formdata || formdata.length === 0) {
            return res.status(404).json({ 
                success: false, 
                message: "No forms found." 
            });
        }

        res.status(200).json({ 
            success: true, 
            message: "Successfully fetched forms.", 
            data: formdata 
        });
    } catch (error) {
        console.error("Error fetching forms:", error.message);
        res.status(500).json({ 
            success: false, 
            message: "An error occurred while fetching forms.", 
            error: error.message 
        });
    }
};

const viewoneform = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Form ID is required."
            });
        }

        const formdata = await form.findById(id).lean();

        if (!formdata) {
            return res.status(404).json({
                success: false,
                message: "Form not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Successfully fetched form.",
            data: formdata
        });
    } catch (error) {
        console.error("Error fetching form:", error.message);
        res.status(500).json({ 
            success: false, 
            message: "An error occurred while fetching form.", 
            error: error.message 
        });
    }
};

const updateform = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid form ID."
            });
        }

        // if (!data || Object.keys(data).length === 0) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "Update data is required."
        //     });
        // }

        const updatedForm = await form.findByIdAndUpdate(id, data, { new: true, runValidators: true }).lean();

        if (!updatedForm) {
            return res.status(404).json({
                success: false,
                message: "Form not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Form updated successfully.",
            data: updatedForm
        });
    } catch (error) {
        console.error("Error updating form:", error.message);
        res.status(500).json({
            success: false,
            message: "An internal server error occurred.",
            error: error.message
        });
    }
};

const deleteForm = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid form ID."
            });
        }

        const deletedForm = await form.findByIdAndDelete(id).lean();

        if (!deletedForm) {
            return res.status(404).json({
                success: false,
                message: "Form not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Form deleted successfully.",
            data: deletedForm
        });
    } catch (error) {
        console.error("Error deleting form:", error.message);
        res.status(500).json({
            success: false,
            message: "An internal server error occurred.",
            error: error.message
        });
    }
};

export default { createForm, viewallform, viewoneform, updateform ,deleteForm };
