﻿using server.Models;
using System.Data.SqlClient;

namespace server.DataAccessLayer
{
    public class DAL
    {
        private static readonly string tableName = "budget_items";

        private static string connectionString = "data source=X13\\SQLEXPRESS; database=budget; integrated security=SSPI";

        private static SqlConnection conn = new SqlConnection(connectionString);

        public static void CreateTable()
        {
            try
            {
                // Creating Connection  
                // writing sql query  
                SqlCommand cm = new SqlCommand("CREATE TABLE IF NOT EXIST budget_data(id int not null, description varchar(255), amount int, type varchar(10)", conn);
                // Opening Connection  
                conn.Open();
                // Executing the SQL query  
                cm.ExecuteNonQuery();
                // Displaying a message  
                Console.WriteLine("Table created Successfully");
            }
            catch (Exception e)
            {
                Console.WriteLine("OOPs, something went wrong." + e);
            }
            // Closing the connection  
            finally
            {
                conn.Close();
            }
        }


        public void AddRecord(BudgetData data)
        {

            try
            {   
                // Creating Connection  
                // writing sql query  
                SqlCommand cm = new SqlCommand($"INSERT INTO {tableName}(description,amount,type,userId) VALUES ('{data.Description}','{data.Amount}','{data.Type}','{data.UserId}')", conn);

                // Opening Connection  
                conn.Open();
                // Executing the SQL query  
                cm.ExecuteNonQuery();
                // Displaying a message  
                Console.WriteLine("Record Inserted Successfully");
            }
            catch (Exception e)
            {
                Console.WriteLine("OOPs, something went wrong." + e);
            }
            // Closing the connection  
            finally
            {
                conn.Close();

            }

        }

        public List<BudgetData> GetAllByUser(int id)
        {
            try
            {
                SqlCommand sqlCommand = new SqlCommand($"SELECT * FROM {tableName} WHERE userId = '{id}'",conn);
                conn.Open();

                SqlDataReader reader = sqlCommand.ExecuteReader();

                List<BudgetData> list = new List<BudgetData>();

                while (reader.Read())
                {
                    BudgetData data = new BudgetData();
                    data.Id = (int)reader["id"];
                    data.UserId = (int)reader["userId"];
                    data.Description = (string)reader["description"];
                    data.Amount = (int)reader["amount"];
                    data.Type = (string)reader["type"];

                    list.Add(data);
                }

                return list;
            }
            catch (Exception)
            {

                throw;
            }
            finally { 
                conn.Close ();
            }
        }

        public List<BudgetData> GetAll()
        {
            try
            {
                SqlCommand cm = new SqlCommand($"SELECT id,userId,description, amount, type FROM {tableName}", conn);
                conn.Open();

                cm.ExecuteNonQuery();

                SqlDataReader sqlDataReader = cm.ExecuteReader();

                List<BudgetData> list = new List<BudgetData>();

                while (sqlDataReader.Read())
                {
                    BudgetData budgetData = new BudgetData();
                    budgetData.Id = (int)sqlDataReader["id"];
                    budgetData.UserId = (int)sqlDataReader["userId"];
                    budgetData.Description = (string)sqlDataReader["description"];
                    budgetData.Amount = (int)sqlDataReader["amount"];
                    budgetData.Type = (string)sqlDataReader["type"];
                    list.Add(budgetData);
                }

                return list;
            }
            catch (Exception e)
            {

                Console.WriteLine(e.Message);
                 throw;
            }
            finally { 
                conn.Close();
            }
        }

        

        public void Update(int id, BudgetData data)
        {
            try
            {
                SqlCommand cm = new SqlCommand($"UPDATE {tableName} SET description = {data.Description}, amount = {data.Amount}, type = {data.Description} WHERE id = {id}",conn);
                conn.Open();
            }
            catch (Exception)
            {

                throw;
            }
            finally
            {
                conn.Close();
            }
        }

        public void Delete(int id)
        {
            try
            {
                SqlCommand cm = new SqlCommand($"DELETE FROM {tableName} WHERE id = {id}", conn);

                conn.Open();

                cm.ExecuteNonQuery();

                Console.WriteLine("Record Deleted");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                throw;
            }
            finally
            {
                conn.Close();
            }
        }
    }
}
