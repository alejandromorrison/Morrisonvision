
# 🚀 Morrison Vision

Welcome to the **Morrison Vision** frontend repository! This guide will help you set up and run the project locally.

---

## 📋 Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js**: Version `17.x` or higher
- **pnpm**: A fast and efficient package manager

### Installing `pnpm`

If you don’t have `pnpm`, install it globally using the following command:

```bash
npm install -g pnpm
```

---

## 🛠️ Running with Docker

To run the project locally with Docker, follow these commands:

### Start Docker

```bash
docker-compose up
```

This will bring up the necessary services for the project, including DynamoDB.

### Stop Docker

```bash
docker-compose down
```

---

## 🗄️ Database

to run the AWS configure you must need to download the AWS CLI V2

https://awscli.amazonaws.com/

To configure the AWS DynamoDB

AWS configure

Access Key: fakeMyKeyId <br>
Secret Access Key: fakeSecretAccessKey <br>
Region: us-west-2

This repository uses **DynamoDB** as the database engine.

---
