﻿using AuctionService.Data;
using AuctionService.DTOs;
using AuctionService.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AuctionService;

[ApiController]
[Route("api/auctions")]
public class AuctionsController : ControllerBase
{
    private readonly AuctionDbContext _context;
    private readonly IMapper _mapper;

    public AuctionsController(AuctionDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<List<AuctionDto>>> GetAllAuctions(){
        var auctions = await _context.Auctions
                                     .Include(x => x.Item)
                                     .OrderBy(x => x.Item.Make)
                                     .ToListAsync();
        return _mapper.Map<List<AuctionDto>>(auctions);
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<AuctionDto>> GetAuctionById(Guid id){
        var auction = await _context.Auctions
                                    .Include(x =>x.Item)
                                    .FirstOrDefaultAsync(x =>x.Id == id);                            
        return _mapper.Map<AuctionDto>(auction);
    }

   
    [HttpPost]
    public async Task<ActionResult<AuctionDto>> CreateAuction(CreateAuctionDto auctionDto) {
       var auction = _mapper.Map<Auction>(auctionDto);
       //Todo: add current user as seller 
       auction.Seller = "test";
       _context.Auctions.Add(auction);
       var result = await _context.SaveChangesAsync() > 0;
       if(!result) return BadRequest("Could not save changes to the DB");
       return CreatedAtAction(nameof(GetAuctionById), new {auction.Id}, 
       _mapper.Map<AuctionDto>(auction));
    }


    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateAuction(UpdateAuctionDto auctionUpdate, Guid id){
        var auction = await _context.Auctions.Include(x => x.Item)
                .FirstOrDefaultAsync(x => x.Id == id);
        if(auction is null) return NotFound();
        //Todo: check seller == username
        auction.Item.Make = auctionUpdate.Make ?? auction.Item.Make;
        auction.Item.Model = auctionUpdate.Model ?? auction.Item.Model;
        auction.Item.Color = auctionUpdate.Color ?? auction.Item.Color;
        auction.Item.Mileage = auctionUpdate.Mileage ?? auction.Item.Mileage;
        auction.Item.Year = auctionUpdate.Year ?? auction.Item.Year;
        var result = await _context.SaveChangesAsync() > 0;
        if(result) return Ok();
        return BadRequest("Problem saving changes");
    }


    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteAuction(Guid id){
        var auction = await _context.Auctions.FindAsync(id);
        if(auction is null) return NotFound();
        //Todo: check seller == username
        _context.Auctions.Remove(auction);
        var result = await _context.SaveChangesAsync() > 0;
        if(!result) return BadRequest("Could not update DB");
        return Ok();
    }

}
