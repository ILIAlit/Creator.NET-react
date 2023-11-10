using Microsoft.AspNetCore.Mvc;

namespace CreatorProject3._0.Services.Interfaces
{
    public interface IProfileServices
    {
        Task<IActionResult> Get(string userName);

        Task<IActionResult> Post()
    }
}
