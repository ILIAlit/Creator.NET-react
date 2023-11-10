using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace CreatorProject3._0.Services.Options
{
    public class AuthOptions
    {
        public const string ISSUER = "Creator"; // издатель токена
        public const string AUDIENCE = "CreatorClient"; // потребитель токена
        const string KEY = "mysupersecret_secretkey!2004";   // ключ для шифрации
        public static SymmetricSecurityKey GetSymmetricSecurityKey() =>
            new SymmetricSecurityKey(Encoding.UTF8.GetBytes(KEY));
    }
}
