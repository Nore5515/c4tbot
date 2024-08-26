SAS="sp=raw&st=2024-08-23T21:30:49Z&se=2024-08-24T05:30:49Z&spr=https&sv=2022-11-02&sr=c&sig=%2BIqWvVXv1skolPIe%2FAAupoIYG%2Fg5Vi7qqU708kgmqnE%3D";
HEADER="https://catbotstorage5515.blob.core.windows.net/"
FILE="\$web/index.html"


URL=$HEADER$FILE?$SAS

URL_WEB=$HEADER\$web?$SAS


ACC_NAME="catbotstorage5515"

PROJ_PATH="~/projects/js/c4tbotweb";

curl $URL --output meep.txt

az storage blob exists \
    --account-key $KEY \
    --account-name $ACC_NAME \
    --container-name \$web \
    --name index.html

# az storage blob show \
#     --account-key $KEY \
#     --account-name $ACC_NAME \
#     -c \$web \
#     -n index.html

az storage blob url \
    --account-key $KEY \
    --account-name $ACC_NAME \
    --container-name \$web \
    --name index.html

# az storage blob download \
#     --account-key $KEY \
#     --account-name $ACC_NAME \
#     -f ~/projects/js/c4tbotweb/dl/meep.txt \
#     -c \$web \
#     -n index.html

# az storage blob upload \
#     --account-key $KEY \
#     --account-name $ACC_NAME \
#     --overwrite true \
#     -f $PROJ_PATH/output/index.html \
#     -c \$web \
#     -n index.html

az storage blob upload-batch \
    --account-key $KEY \
    --account-name $ACC_NAME \
    -d $URL_WEB \
    -s "../dist" \
    --overwrite true