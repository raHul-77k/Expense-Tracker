const expenseApp = require('../models/expenseDetails');

exports.getExpenseDetails = async(req, res, next)=>{
    try{
        const expense = await expenseApp.findAll();
        res.status(200).json({allExpense:expenses});
    }catch(err){
        console.log(err);
    }
}

exports.postExpenseDetails = async(req, res, next) =>{
    try{
        const expense = req.body.amount;
        console.log(expense);

        const description = req.body.description;
        const expensecat = req.body.expensecat;

        const data = await expenseApp.create({
            Amount: expense,
            Description: description,
            ExpenseCategory: expensecat
        });
        console.log(data);
        res.satatus(201).json({newExpenseDetails:data});
    }
    catch(err){
        console.log(err);
    }
};

exports.deleteExpenseDetails = async (req, res, next)=>{
    const id = req.params.id;
    await expenseApp.destroy({
        where:{
            id:id
        }
    });
    res.sendStatus(200);
}

exports.editExpenseDetails = async(req, res, next) =>{
    try{
        const expense = req.body.amount;
        const description=req.body.description;
        const expensecat=req.body.expensecat;
        const uid=req.body.id;
        const update = await expenseApp.update({Amount:expense, Description:description, ExpenseCategory:expensecat},{
            where:{
                id:uid
            }
        })
        res.status(200).json({updated:updata});
    }catch(err){
        console.log(err);
    }
}