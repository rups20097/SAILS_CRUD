/**
 * CompanyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


// fetchting indivisual data
  async create(req,res) {
  //fetching whole data
    try{
      let params = req.allParams();
      if(!params.name && !params.phone){
        return res.badRequest({err: 'You missed either name or phone_number!'});
      }
      const results = await Company.create({
        name: params.name,
        phone: params.phone,
        city: params.city

        });
        return res.ok(results);
    }
    catch(err){
      res.serverError(err);
    }
  },


//getting any  perticular object by id
  async findOne(req,res){
      try{
        const admi = await Company.findOne(req.params.id);
        return res.ok(admi);
      }
      catch(err){
        res.serverError(err);
      }
  },

//getting all the objects created in database
  async findAll(req,res){
      try{
        const results = await Company.find();
        return res.ok(results);
      }
      catch(err){
        return res.serverError(err);
      }
  },

//updating an boject with some attributes
  async update(req,res){
    try{
      let params = req.allParams();
      let attributes = {};

      if(params.name){
        attributes.name = params.name;
      }
      if(params.city){
        attributes.city = params.city;
      }
      if(params.phone){
        attributes.phone = params.phone;
      }

      const results = await Company.update({id: req.params.id}, attributes);
      return res.ok(results);
    }
    catch(err){
    return res.serverError(err);
  }
  },

//dwleting an object
  async delete(req,res){
    try{
      const res = await Company.destroy(req.params.id);
      return res.ok(res);
    }
    catch(err){
      return res.serverError(err);
    }
  },

};
