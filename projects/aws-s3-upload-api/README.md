# AWS S3 Upload API

Projeto simples para aplicar técnica de upload direto ao serviço de Cloud utilizando presigned URL

Esta abordagem evita consumo desnecessário de processamento da API para upload da imagem, a imagem irá ser "upada" direto ao storage em nuvem pelo client.

## Vantagens de utilizar "presigned URL's"

![Vantagens de utilizar "presigned URL's"](docs/presigned-url-approach-advantages.PNG)

## Exemplo de fluxo de upload

![Exemplo de fluxo de upload](docs/aws-s3-file-upload-flow.PNG)
