const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const multer = require('multer')
const nodemailer = require('nodemailer');
const middle = require('./middleware/user')
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
require('dotenv').config()
const mysql = require('mysql2');
const path = require("path");
const { checkToken } = require('./middleware/user');
const PORT = 3000;
const hostname = '10.82.19.126';

app.set('view engine', 'ejs');

app.use('/images',express.static('uploadedFiles'))

const conn                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : process.env.db_pw,
    database : 'festival'
  })

const smtpTransport = nodemailer.createTransport({
    service: "Naver",
    auth: {
        user: process.env.email_id,
        pass: process.env.email_pw
    },
    // host:smtp.naver.com,
    // port:587, 
  })
/*
tls: {
    rejectUnauthorized: false
}*/
function getRandomInt(min, max) { //min ~ max 사이의 임의의 정수 반환
    return Math.floor(Math.random() * (max - min)) + min;
}

const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'uploadedFiles/');
      },
      filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + path.extname(file.originalname));
      }
    }),
    limits: { fileSize: 1000000 }
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"form.html"));
})

app.get('/main',(req,res)=>{
    conn.query(`SELECT * FROM board`,(err,rows,field)=>{
        if(err) throw err;
        var result = rows;
        if( req.cookies.accessToken === undefined){
            res.json(result);
        }
        else if(jwt.verify(req.cookies.accessToken,process.env.SECRET_KEY) != null){
            user_id = jwt.verify(req.cookies.accessToken,process.env.SECRET_KEY).user_id;
            conn.query(`SELECT board_id from heart where user_id = ?`,[user_id],(err,rows,field)=>{
                if(err) throw err;
                var result2 = rows;
                res.json([result,result2]);
            })
        }
    })
})

app.get('/board',(req,res)=>{
    if( req.cookies.accessToken === undefined){
        const board_id = req.query.board_id;
        conn.query(`SELECT * FROM board WHERE id = ?`,[board_id],(err,rows,field)=>{
            if(err) throw err;
            var board_result = rows;
            conn.query(`SELECT * FROM comment WHERE board_id = ?`,[board_id],(err,rows,field)=>{
                if(err) throw err;
                var comment_result = rows;
                res.send([board_result,comment_result]);
            })
        })
    }
    else{
        user_id = jwt.verify(req.cookies.accessToken,process.env.SECRET_KEY).user_id;
        const board_id = req.query.board_id;
        conn.query(`SELECT * FROM board WHERE id = ?`,[board_id],(err,rows,field)=>{
            if(err) throw err;
            var board_result = rows;
            conn.query(`SELECT * FROM comment WHERE board_id = ?`,[board_id],(err,rows,field)=>{
                if(err) throw err;
                var comment_result = rows;
                conn.query(`SELECT * FROM comment where board_id = ?`,[board_id],(err,rows,field)=>{
                    if(err) throw err;
                    var user_write;
                    for(var i = 0; i != comment_result.length;i++){
                        if(rows[i].user_id === user_id){
                            user_write = rows[i].id;
                        }
                    }
                    conn.query(`SELECT * FROM heart WHERE board_id = ? and user_id = ?`,[board_id,user_id],(err,rows,field)=>{
                        if(err) throw err;
                        if(!rows[0])res.send([board_result,comment_result,0,user_write]);
                        else{
                            res.send([board_result,comment_result,1,user_write])
                        }
                    })
                })
            })
        })
    }
})

app.get('/mypage',checkToken,(req,res)=>{
    const user_id = jwt.verify(req.cookies.accessToken,process.env.SECRET_KEY).user_id;
    conn.query(`SELECT * from board where user_id = ?`,[user_id],(err,rows,field)=>{
        if(err) throw err;
        var result = rows;
        res.json(result);
    })
})

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,"signup.html"));
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"login.html"));
})

app.get('/find', (req,res)=>{
    res.sendFile(path.join(__dirname,"find.html"));
})

app.get('/uploading',(req,res)=>{
    res.render('uploading')
})

app.get('/upload',(req,res)=>{
    res.sendFile(path.join(__dirname,"upload.html"));
})

app.get('/heart',(req,res)=>{
    res.sendFile(path.join(__dirname,"heart.html"));
})

app.get('/comment',(req,res)=>{
    res.sendFile(path.join(__dirname,"comment.html"));
})

app.post('/login',function(req,res){
    const id = req.body.user_id 
    const pw = req.body.user_pw
    console.log("로그인 시도 id ",id,"pw ",pw);
    conn.query(`CALL login(?,?)`,[id,pw],(err,rows,field)=>{
        if(err) throw err;
        if(rows[0][0].result===0){
            console.log("로그인 성공");
            var accessToken = jwt.sign({
                user_id:id
            },
            process.env.SECRET_KEY,
            {
                subject: "stone",
                expiresIn: "14d",
                issuer: "stone"
            });
            var refreshToken = jwt.sign({
            },
            process.env.SECRET_KEY,
            {
                subject: "stone",
                expiresIn: "30d",
                issuer: "stone"
            });
            var result = {
                "login" : "succed"
            }
            res.cookie('accessToken',accessToken);
            res.cookie('refreshToken',refreshToken);
            res.json(result)
        }
        else if(rows[0][0].result === 1){
            console.log("아이디가 없음");
            var result = {
                "login" : "noid"
            }
            res.json(result)
        }
        else if(rows[0][0].result === 2){
            console.log("비밀번호가 틀림");
            var result = {
                "login" : "nopw"
            }
            res.json(result)
        }
        else{
            console.log("상상도 못한 에러");
            var result = {
                "login" : "fucking"
            }
            res.json(result)
        }
    })
})

app.get('/favicon.ico', (req, res) => res.status(204));

app.post('/uploading',middle.checkToken, upload.array('attachments'), function(req,res){
    const title = req.body.title
    const content = req.body.content
    const tag = req.body.tag
    const price = req.body.price
    if(title === undefined || content === undefined || tag === undefined){
        console.log("시발");
        res.send("오류");
    }
    else{
        const user_id = jwt.decode(req.cookies.accessToken).user_id;
        // const user_id = jwt.verify(req.cookies.accessToken,process.env.SECRET_KEY).user_id;
        const query = `insert into board values(0,?,?,?,now(),"0",?,?)`
        console.log("게시글 유저id : ",user_id,"내용 : ",content,"태그 : ",tag,"제목 : ",title,"가격 : ",price);
        conn.query(query,[title,content,tag,user_id,price],(err,rows,field)=>{
           if(err) console.log(err);
           var result = {
            "upload" : "succed"
            }
           res.json(result)
        //    conn.query(`select max(id) AS id from board`,(err,rows,field)=>
        //    {
        //        if(err) throw err;
        //        board_id = rows[0].id
        //        var query2 = "insert into image values " 
        //        for(var i = 0; i != req.files.length; i ++){
        //            query2 += `(0,"${req.files[i].filename}",${board_id}),`
        //        }
        //        conn.query(query2.substring(0,query2.length-1),(err,rows,field)=>{
        //            if(err) throw err;
        //            conn.query(`update board set present_image_path = ? where id = ?`,[req.files[0].filename,board_id],(err,rows,field)=>{
        //                if(err) throw err;
        //                var result = {
        //                    "upload" : "succed"
        //                }
        //                res.json(result)
        //            })
        //        })
        //    })
        })
        
    }
})

app.post('/find', function(req,res){
    const email = req.body.user_email
    conn.query(`select email from user where email = ?`,[email],(err,rows,field)=>{
        if(err) throw err;
        if(!rows[0]){
            var result = {
                "findpw" : "noemail"
            }
            res.json(result);
        }
        else{
            var number = getRandomInt(1111, 9999);
            console.log(email,"로 보내는 인증번호 : ",number);
            const mailOptions = {
                from: 'as979200@naver.com',
                to: email,
                subject: '벽돌의 비밀번호를 초기화하기 위한 인증메일입니다.',
                html: `<div class="">
                <table width="820" cellspacing="0" align="center">
                    <thead>
                    <tr>
                        <th width="820" height="112"
                            style="border-width: 3px 1px 1px; border-style: solid; border-color: rgb(217, 35, 48) rgb(204, 204, 204) rgb(204, 204, 204); border-image: initial; text-align: left; --darkreader-inline-border-right:#3e4446; --darkreader-inline-border-bottom:#3e4446; --darkreader-inline-border-left:#3e4446; --darkreader-inline-border-top:#9a1922;">
                                    <span style="padding:42px 0 30px 0"><img
                                            src="https://i.imgur.com/X2SWHuv.png" title="logo.png" width="200" height="130"/></span>
                        </th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <td width="820" height="54"
                            style="border-top: 1px solid rgb(204, 204, 204); border-right: 1px solid rgb(204, 204, 204); border-left: 1px solid rgb(204, 204, 204); border-image: initial; border-bottom: none; --darkreader-inline-border-top:#3e4446; --darkreader-inline-border-right:#3e4446; --darkreader-inline-border-left:#3e4446; --darkreader-inline-border-bottom: initial;"
                            data-darkreader-inline-border-top="" data-darkreader-inline-border-right=""
                            data-darkreader-inline-border-left="" data-darkreader-inline-border-bottom=""></td>
                    </tr>
                    <tr>
                        <td style="border-right: 1px solid rgb(204, 204, 204); border-left: 1px solid rgb(204, 204, 204); border-image: initial; border-bottom: none; border-top: none; --darkreader-inline-border-right:#3e4446; --darkreader-inline-border-left:#3e4446; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-top: initial;"
                            data-darkreader-inline-border-right="" data-darkreader-inline-border-left=""
                            data-darkreader-inline-border-bottom="" data-darkreader-inline-border-top=""><p
                                style="font-family: 맑은고딕, dotum, 돋움, gulim, 굴림, sans-serif; font-size: 16px; color: rgb(69, 69, 69); font-weight: normal; margin: 0px 50px; text-align: left; letter-spacing: -1px; line-height: 24px; --darkreader-inline-color:#bcb7ae;"
                                data-darkreader-inline-color="">본 메일은 보안을 위해 확인 후 삭제 하시기 바랍니다.</p></td>
                    </tr>
            
                    <tr>
                        <td style="border-right: 1px solid rgb(204, 204, 204); border-left: 1px solid rgb(204, 204, 204); border-image: initial; border-bottom: none; border-top: none; --darkreader-inline-border-right:#3e4446; --darkreader-inline-border-left:#3e4446; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-top: initial;"
                            data-darkreader-inline-border-right="" data-darkreader-inline-border-left=""
                            data-darkreader-inline-border-bottom="" data-darkreader-inline-border-top="">
                            <table width="720" cellpadding="0" cellspacing="0" border="0" align="center"
                                   style="table-layout: fixed; margin: 0px auto; padding: 30px 0px 55px; border-top: 1px solid rgb(204, 204, 204); --darkreader-inline-border-top:#3e4446;"
                                   data-darkreader-inline-border-top="">
                                <tbody>
                                    <td style="padding-top:16px">
                                        <table cellpadding="0" cellspacing="0" style="table-layout:fixed">
                                                <td style="width:184px">프로젝트 [벽돌]팀</td>
                                        </table>
                                    </td>
                                <tr>
                                    <td>
                                        <table cellpadding="0" cellspacing="0" style="table-layout:fixed;padding-top:3px">
                                                <td style="width:400px">2021 GSM 아이디어 페스티벌</td>
                                        </table>
                                </tr>
                                <tr>
                                    <td>
                                        <table cellpadding="0" cellspacing="0" border="0"
                                               style="table-layout:fixed;padding-top:5px">
                                                <td width="300">감사합니다. <br><br>Thank you.</td>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td height="3"
                            style="border-right: 1px solid rgb(204, 204, 204); border-bottom: 1px solid rgb(204, 204, 204); border-left: 1px solid rgb(204, 204, 204); border-image: initial; border-top: none; --darkreader-inline-border-right:#3e4446; --darkreader-inline-border-bottom:#3e4446; --darkreader-inline-border-left:#3e4446; --darkreader-inline-border-top: initial;"
                            data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom=""
                            data-darkreader-inline-border-left="" data-darkreader-inline-border-top=""></td>
                    </tr>
                    </tfoot>
                    <tbody>
                    <tr>
                        <td width="820" height="60"
                            style="border-right: 1px solid rgb(204, 204, 204); border-left: 1px solid rgb(204, 204, 204); border-image: initial; border-bottom: none; border-top: none; --darkreader-inline-border-right:#3e4446; --darkreader-inline-border-left:#3e4446; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-top: initial;"
                            data-darkreader-inline-border-right="" data-darkreader-inline-border-left=""
                            data-darkreader-inline-border-bottom="" data-darkreader-inline-border-top=""></td>
                    </tr>
                    <tr>
                        <td style="border-right: 1px solid rgb(204, 204, 204); border-left: 1px solid rgb(204, 204, 204); border-image: initial; border-bottom: none; border-top: none; --darkreader-inline-border-right:#3e4446; --darkreader-inline-border-left:#3e4446; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-top: initial;"
                            data-darkreader-inline-border-right="" data-darkreader-inline-border-left=""
                            data-darkreader-inline-border-bottom="" data-darkreader-inline-border-top=""><p
                                style="font-family: 맑은고딕, dotum, 돋움, gulim, 굴림, sans-serif; font-size: 40px; color: rgb(34, 34, 34); font-weight: bold; text-align: center; --darkreader-inline-color:#d3cfc9;"
                                data-darkreader-inline-color="">안녕하세요. <a href="http://10.120.74.56:3000/" target="_blank"
                        >벽돌</a>입니다.<br><span
                                style="color: rgb(215, 24, 38); --darkreader-inline-color:#e93b47;"
                                data-darkreader-inline-color=""><span class="il">인증</span> <span
                                class="il">번호</span>를</span><br>알려드립니다.</p></td>
                    </tr>
                    <tr>
                        <td height="55"
                            style="border-right: 1px solid rgb(204, 204, 204); border-left: 1px solid rgb(204, 204, 204); border-image: initial; border-bottom: none; border-top: none; --darkreader-inline-border-right:#3e4446; --darkreader-inline-border-left:#3e4446; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-top: initial;"
                            data-darkreader-inline-border-right="" data-darkreader-inline-border-left=""
                            data-darkreader-inline-border-bottom="" data-darkreader-inline-border-top=""></td>
                    </tr>
                    <tr>
                        <td height="55"
                            style="background: rgb(245, 245, 245); --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor:#1e2021;"
                            data-darkreader-inline-bgimage="" data-darkreader-inline-bgcolor=""></td>
                    </tr>
                    <tr>
                        <td height="163"
                            style="background: rgb(245, 245, 245); vertical-align: middle; --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor:#1e2021;"
                            data-darkreader-inline-bgimage="" data-darkreader-inline-bgcolor="">
                            <table cellpadding="0" cellspacing="0" border="0" align="center">
                                <tbody>
                                <tr>
                                    <td width="159" height="163"></td>
                                    <td width="504"
                                        style="background: rgb(255, 255, 255); border: 3px solid rgb(215, 24, 38); text-align: center; --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor:#181a1b; --darkreader-inline-border-top:#a5121d; --darkreader-inline-border-right:#a5121d; --darkreader-inline-border-bottom:#a5121d; --darkreader-inline-border-left:#a5121d;"
                                        data-darkreader-inline-bgimage="" data-darkreader-inline-bgcolor=""
                                        data-darkreader-inline-border-top="" data-darkreader-inline-border-right=""
                                        data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left=""><p
                                            style="font-family: 맑은고딕, dotum, 돋움, gulim, 굴림, sans-serif; font-size: 16px; color: rgb(34, 34, 34); --darkreader-inline-color:#d3cfc9;"
                                            data-darkreader-inline-color=""><span class="il">인증</span><span
                                            class="il">번호</span> : <strong
                                            style="font-size: 22px; color: rgb(215, 24, 38); font-weight: bold; --darkreader-inline-color:#e93b47;"
                                            data-darkreader-inline-color="">${number}</strong></p></td>
                                    <td width="159" height="163"></td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td height="60"
                            style="background: rgb(245, 245, 245); --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor:#1e2021;"
                            data-darkreader-inline-bgimage="" data-darkreader-inline-bgcolor=""></td>
                    </tr>
                    </tbody>
                </table>
            </div>`
            };
            smtpTransport.sendMail(mailOptions, (err, info) => {
                if(err) {
                    console.log(err);
                }
                console.log('finish', + info.response)
                res.status(200).send((number).toString());
                smtpTransport.close();
            })
        }
    })
})

app.post('/pwchange',function(req,res){
    const ch_pw = req.body.ch_pw;
    const user_id = req.body.ch_id;
    console.log(ch_pw,user_id);
    conn.query(`update user set pw = ? where id = ?`,[ch_pw,user_id],(err,rows,field)=>{
        if(err) throw err;
        var result = {
            "pwchange" : "succed"
        }
        res.json(result);
    })
})

app.post('/signup', function(req,res){
    const id = req.body.user_id
    const pw = req.body.user_pw
    const email = req.body.user_email
    const nickname = req.body.user_nickname
    console.log("회원가입 시도 id ",id,"pw ",pw,"email ",email,"nickname ",nickname)
    const query = `insert into user values(?,?,?,now(),?)`
    conn.query(query,[id,pw,email,nickname],(err,rows,field)=>{
        if(err) throw err;
        var accessToken = jwt.sign({
            user_id:id
        },
        process.env.SECRET_KEY,
        {
            subject: "stone",
            expiresIn: "14d",
            issuer: "stone"
        });
        var refreshToken = jwt.sign({
        },
        process.env.SECRET_KEY,
        {
            subject: "stone",
            expiresIn: "30d",
            issuer: "stone"
        });
        var result = {
            "signup" : "succed"
        }
        res.cookie('accessToken',accessToken);
        res.cookie('refreshToken',refreshToken);
        res.json(result);  
    })
})

app.post('/comment',middle.checkToken,function(req,res){
    const user_id = jwt.verify(req.cookies.accessToken,process.env.SECRET_KEY).user_id;
    const content = req.body.cm_content;
    const board_id = req.body.board_id;
    if(content === undefined || board_id === undefined){
        console.log("ㅠㅠ")
    }
    else{
        console.log("댓글 유저id : ",user_id,"내용 : ",content,"게시판번호 : ",board_id);
        const query = `SELECT user_id FROM board where id = ?`
        conn.query(query,[board_id],(err,rows,field)=>{
            if(err) throw err;
            if(rows[0].user_id===user_id){
                var query2 = `insert into comment values(0,?,now(),?,?,2)`
            }
            else{
                var query2 = `insert into comment values(0,?,now(),?,?,0)`
            }
            conn.query(query2,[content,board_id,user_id],(err,rows,field)=>{
                if(err) throw err;
                var result = {
                    "comment" : "succed"
                }
                res.json(result);
            })
        })
}
})

app.post('/logout',middle.checkToken,function(req,res){
    res.cookie('accessToken', null, {
        maxAge: 0,
    });
    res.cookie('refreshToken', null, {
        maxAge: 0,
    });
    res.send("Logout end");
})

app.post('/heart',middle.checkToken,function(req,res){
    const board_id = req.body.board_id;
    const user_id = jwt.verify(req.cookies.accessToken,process.env.SECRET_KEY).user_id;
    conn.query(`SELECT * from heart where board_id = ? and user_id = ?`,[board_id,user_id],(err,rows,field)=>{
        if(err) throw err;
        if(rows[0]){
            console.log("찜취소 게시글 : ",board_id,"유저 : ",user_id);
            const query = `delete from heart where board_id = ? and user_id = ?`
            conn.query(query,[board_id,user_id],(err,rows,field)=>{
                if(err) throw err;
                var result = {
                    "heartcancel" : "succed"
                }
                res.json(result);
            })
        }
        else{
            console.log("찜하기 게시글 : ",board_id,"유저 : ",user_id);
            const query = `insert into heart values(?,?)`;
            conn.query(query,[board_id,user_id],(err,rows,field)=>{
                if(err) throw err;
                var result = {
                    "heartinsert" : "succed"
                }
                res.json(result);
            })
        }
    })
})

app.get('/myheart',middle.checkToken,function(req,res){
    const user_id = jwt.verify(req.cookies.accessToken,process.env.SECRET_KEY).user_id;
    conn.query(`SELECT board_id FROM heart WHERE user_id = ?`,[user_id],(err,rows,field)=>{
        if(err) throw err;
        var result;
        var query2 = `SELECT * FROM board WHERE id = -1`
        for(var i = 0; i != rows.length;i ++){
            query2+=` or id = ${rows[i].board_id}`
        }
        conn.query(query2,(err,rows,field)=>{
            if(err) throw err;
            res.send(rows);
        })
    })
})

app.post('/delete',middle.checkToken,function(req,res){
    const board_id = req.body.board_id_d
    console.log(board_id,"번 게시글 삭제");
    conn.query(`delete from image where board_id = ?`,[board_id],(err,rows,field)=>{
        if(err) throw err;                
        conn.query(`delete from heart where board_id = ?`,[board_id],(err,rows,field)=>{
            if(err) throw err;
            conn.query(`delete from comment where board_id = ?`,[board_id],(err,rows,field)=>{
                if(err) throw err;
                conn.query(`delete from board where id = ?`,[board_id],(err,rows,field)=>{
                    if(err) throw err;
                    var result = {
                        "delete" : "succed"
                    }
                    res.json(result);
                })
            })
        })
    })
})

app.post('/cmdel',middle.checkToken,function(req,res){
    const comment_id = req.body.comment_id;

    console.log(comment_id,"번 댓글 삭제");
    conn.query(`delete from comment where id = ?`,[comment_id],(err,rows,field)=>{
        if(err) throw err;
        var result = {
            "cm_delete" : "succed"
        }
        res.json(result);
    })
})

app.post('/update',middle.checkToken,function(req,res){
    const board_id = req.body.board_id_u
    const title = req.body.title_u
    const content = req.body.content_u
    const tag = req.body.tag_u
    const price = req.body.price_u
    const user_id = jwt.verify(req.cookies.accessToken,process.env.SECRET_KEY).user_id;
    console.log("게시글수정 유저id : ",user_id,"내용 : ",content,"게시판번호 : ",board_id,"태그 : ",tag,"가격 : ",price,"제목 : ",tag);
    const query = `update board set title = ?, content = ?, tag = ?, price = ? where id = ? and user_id = ?`
    conn.query(query,[title,content,tag,price,board_id,user_id],(err,rows,field)=>{
        if(err) throw err;
        var result = {
            "update" : "succed"
        }
        res.json(result);
    })
})

app.post('/select',middle.checkToken,function(req,res){
    const comment_id = req.body.comment_id                                                                     
    console.log(comment_id+"번 선택");
    conn.query(`update comment set stat = "1" where id = ?`,[comment_id],(err,rows,field)=>{
        if(err) throw err;
        var result = {
            "select" : "succed"
        }
        res.json(result);
    })
})

app.listen(PORT,hostname, function(){
    console.log("Server running at "+hostname+":"+PORT);
})