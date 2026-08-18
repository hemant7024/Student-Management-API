const registerStudent = (req, res) => {
    res.status(201).json({
        success:true,
        message:"Students registered successfully"
    })
}

export default registerStudent;