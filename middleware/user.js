const jwt = require('jsonwebtoken');

module.exports = {
     checkToken: async (req,res,next) => {
        if( req.cookies.accessToken === undefined) throw Error('로그인 하셈');//accessToken 자체가 없는 경우
        const refreshToken = jwt.verify(req.cookies.refreshToken,process.env.SECRET_KEY)
        var accessToken;
        var temp = 0;
        try{
            accessToken = await jwt.verify(req.cookies.accessToken,process.env.SECRET_KEY)
        }
        catch(err){
            if (err.message === 'jwt expired') {
                const newaccessToken = jwt.sign(
                    {
                        user_id:'seungwon'
                    },
                    process.env.SECRET_KEY,
                    {
                        subject: "stone",
                        expiresIn: "14d",
                        issuer: "stone"
                    })
                    res.cookie('accessToken',newaccessToken);
                    temp = 0;
                    next();
                // temp = 1;
            } 
        }
        if(accessToken === null||temp == 1){
            if(refreshToken === null)throw Error('로그인 하셈');//accessToken,refreshToken 둘다 없는 경우
            var user_id = accessToken.user_id
            const newaccessToken = jwt.sign(
                {
                    user_id
                },
                process.env.SECRET_KEY,
                {
                    subject: "stone",
                    expiresIn: "14d",
                    issuer: "stone"
                })
                res.cookie('accessToken',newaccessToken);
                temp = 0;
                next();
        }
        else{
            if(refreshToken===undefined){ // 거의 없지만, refresh는 만료되고 access는 있는 경우
                const newrefreshToken = jwt.sign({
                },
                process.env.SECRET_KEY,
                {
                    subject: "stone",
                    expiresIn: "30d",
                    issuer: "stone"
                })
                res.cookie('refreshToken',newrefreshToken);
                next();
            }
            else{
                next();//둘다 잘 살아있는 경우
            }
        }
    }
}
