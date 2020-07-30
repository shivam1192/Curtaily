// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;
contract curtaily {
    string[] users;
    mapping(uint=>string[]) c_lurl;
    mapping(uint=>mapping(uint => bytes3) ) c_turl;
     function Convert_lurl_turl(string memory _user,string memory _lurl) public returns(bytes3){
        uint user_exist_index = 0;
        uint lurl_exist_index = 0;

        for(uint i = 0;i < users.length;i++){
            if(keccak256(abi.encodePacked(users[i])) == keccak256(abi.encodePacked(_user))){
                user_exist_index = i+1;
                break;
            }
        }
        if(user_exist_index == 0){
            users.push(_user);
            user_exist_index = users.length;
        }
        for(uint i = 0 ;i < c_lurl[user_exist_index-1].length;i++){
            if(keccak256(abi.encodePacked(c_lurl[user_exist_index-1][i])) == keccak256(abi.encodePacked(_lurl))){
                lurl_exist_index = i+1;
                break;
            }
        }
        if(lurl_exist_index == 0){
            c_lurl[user_exist_index-1].push(_lurl);
            lurl_exist_index = c_lurl[user_exist_index-1].length;
              uint number = 100*user_exist_index + 10*lurl_exist_index + 1;
                bytes32 turl_code = keccak256(abi.encodePacked(number));
                bytes3 turl_url = bytes3(turl_code);
                c_turl[user_exist_index-1][lurl_exist_index-1] = turl_url;
        }
        return c_turl[user_exist_index-1][lurl_exist_index-1];
    }
    function Correspond_lurl(bytes3 _turl) public view returns(string memory){
        uint lurl_exist_index = 0;
        uint user_exist_index = 0;
        for(uint i = 0 ;i < users.length ; i++){
            for(uint j = 0;j<c_lurl[i].length;j++){
                    if(_turl == c_turl[i][j]){
                        lurl_exist_index = j + 1;
                        user_exist_index = i + 1;
                    }
            }
        }
        if(lurl_exist_index != 0 || user_exist_index != 0 ){
            return c_lurl[user_exist_index-1][lurl_exist_index-1];
        }else{
            return "No Such URL Exist";
        }
    }
    function get_turl_lurl(string memory _user) public view returns(string[] memory,bytes3[] memory){
        uint user_exist_index = 0;
        for(uint i = 0;i<users.length;i++){
            if(keccak256(abi.encodePacked(users[i])) == keccak256(abi.encodePacked(_user))){
                user_exist_index = i+1;
            }
        }
         string[] memory userlist = new string[](c_lurl[user_exist_index-1].length);
         for(uint i = 0;i<c_lurl[user_exist_index-1].length;i++){
                userlist[i] = c_lurl[user_exist_index-1][i];
        }
        bytes3[] memory trl_list = new bytes3[](c_lurl[user_exist_index-1].length);
         if(user_exist_index != 0 ){
             for(uint i = 0;i<c_lurl[user_exist_index-1].length;i++){
                 trl_list[i] = c_turl[user_exist_index-1][i];
             }
            return (userlist,trl_list);
        }else{
            return (userlist,trl_list);
        }
    }

}