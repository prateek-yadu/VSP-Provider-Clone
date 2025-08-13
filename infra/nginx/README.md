
# Setup Nginx


#### ***Note*** - You need to genrate the .pem file for the nginx crt as you wont get the .pem file you will get .pfx file to extract it run the following command

```bash
openssl pkcs12 -in [your_lxd_pfx_file.pfx] -nocerts -nodes -out key.pem
```

then paste it in the /etc/nginx folder

and also move the crt file in the nginx folder it will be genrated by lxd UI don't worry

**source**:- https://stackoverflow.com/questions/16397858/how-to-extract-private-key-from-pfx-file-using-openssl [first comment and first command] 