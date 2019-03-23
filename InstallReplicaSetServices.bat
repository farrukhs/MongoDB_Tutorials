sc.exe create MongoDB_Arbiter binPath= "\"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe\" --service --config=\"C:\Mongo\MongoDB_Configs\config_Arbiter.cfg"" DisplayName= "MongoDB_Arbiter" start= "auto" 
sc.exe create MongoDB_Primary binPath= "\"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe\" --service --config=\"C:\Mongo\MongoDB_Configs\config_Primary.cfg"" DisplayName= "MongoDB_Primary" start= "auto" 
sc.exe create MongoDB_Secondary_1 binPath= "\"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe\" --service --config=\"C:\Mongo\MongoDB_Configs\config_Secondary_1.cfg"" DisplayName= "MongoDB_Secondary_1" start= "auto" 
sc.exe create MongoDB_Secondary_2 binPath= "\"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe\" --service --config=\"C:\Mongo\MongoDB_Configs\config_Secondary_2.cfg"" DisplayName= "MongoDB_Secondary_2" start= "auto" 

pause