using System.Collections.Generic;
using System.Data.SqlClient;
using server.Models;

namespace server.DataAccessLayer
{
    public class UserDal
    {
        private static string connectionString = "data source=X13\\SQLEXPRESS; database=budget; integrated security=SSPI";

        private static SqlConnection conn = new SqlConnection(connectionString);
        private static string tableName = "budget_users";

        // Will be used as Data Access Layer for Users

        public void CreateUser(Users data)
        {
            try
            {
                SqlCommand cmd = new SqlCommand($"INSERT INTO {tableName}(email,password) VALUES ('{data.Email}','{data.Password}')", conn);
                conn.Open();
                cmd.ExecuteNonQuery();
                Console.WriteLine("Record Inserted correctly");
            }
            catch (Exception e)
            {

              Console.WriteLine(e.Message);
            }
            finally
            {
                conn.Close();
            }
        }

        public void DeleteUser(int id, Users user)
        {
            try
            {

            }
            catch (Exception)
            {

                throw;
            }
            finally
            {

            }

        }

        public void EditUser(int id, Users user)
        {
            try
            {
                SqlCommand cm = new SqlCommand($"",conn);
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

        public List<Users> GetUsers()
        {
            try
            {
                SqlCommand sql = new SqlCommand($"SELECT * FROM {tableName}", conn);
                conn.Open();

                SqlDataReader reader = sql.ExecuteReader();

                List<Users> users = new List<Users>();

                while (reader.Read())
                {
                    Users user = new Users();
                    user.Id = (int?)reader["id"];
                    user.Email = (string)reader["email"];
                    user.Password = (string)reader["password"]; 

                    users.Add(user);
                }

                return users;
                


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

        public Users GetUser(string email, string password)
        {
            try
            {
                SqlCommand cmd = new SqlCommand($"SELECT email, password FROM {tableName} WHERE email='{email}' AND password='{password}'", conn);
                conn.Open();

                SqlDataReader reader = cmd.ExecuteReader();

                Users users = new Users();

                while (reader.Read())
                {
                    users.Email = (string)reader["email"];  
                    users.Password = (string)reader["password"];
                }

                return users;

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

        public Users GetUser(int Id)
        {
            try
            {   
                SqlCommand cmd = new SqlCommand($"SELECT * FROM {tableName} WHERE id = '{Id}'",conn);
                conn.Open();

                SqlDataReader r = cmd.ExecuteReader();

                Users users = new Users();


                while (r.Read())
                {
                    users.Id = (int?)r["id"];
                    users.Email = (string)r["email"];
                }

                return users;
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
    }
}
