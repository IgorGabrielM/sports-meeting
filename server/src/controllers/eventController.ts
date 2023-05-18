const getAll = (req: any, res: any) => {
    return res.status(200).json({message: 'Controller ta joia'});
}

module.exports = {
    getAll,
}